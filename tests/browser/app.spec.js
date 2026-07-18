const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const path = require('node:path');
const { pathToFileURL } = require('node:url');

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test('loads only local dependencies and independent image assets', async ({ page }) => {
    const externalRequests = [];
    page.on('request', request => {
        const url = request.url();
        if (!url.startsWith('http://127.0.0.1:4173')) externalRequests.push(url);
    });

    const response = await page.goto('/');
    await expect(page.locator('#loading-screen')).toBeHidden();
    await expect(page.locator('#enter-btn')).toBeEnabled();
    await expect(page.locator('.card-element')).not.toHaveCount(0);
    await expect(page.locator('.card-img').first()).toHaveAttribute('src', /assets\/images\/.+\.[a-f0-9]{12}\.webp$/);
    const loadedFonts = await page.evaluate(() => document.fonts.load('16px "Noto Serif SC"', '哺乳纲'));
    expect(loadedFonts.length).toBeGreaterThan(0);
    expect(externalRequests).toEqual([]);
    expect(response.headers()['content-security-policy']).toContain("default-src 'self'");
});

test('transition is idempotent and creates one tree', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#enter-btn')).toBeEnabled();
    await page.evaluate(() => {
        window.__treeInitCount = 0;
        const original = EvolutionTree.prototype.init;
        EvolutionTree.prototype.init = function(...args) {
            window.__treeInitCount += 1;
            return original.apply(this, args);
        };
        const button = document.getElementById('enter-btn');
        button.click();
        button.click();
    });

    await expect(page.locator('#container-viz > svg')).toHaveCount(1);
    expect(await page.evaluate(() => window.__treeInitCount)).toBe(1);
    expect(await page.evaluate(() => window.mammaliaApp.state)).toBe('tree');
});

test('collapsed descendants remain searchable and English common names work', async ({ page }) => {
    await page.goto('/');
    await page.click('#enter-btn');
    await expect(page.locator('#container-viz > svg')).toBeVisible();

    await page.click('#btn-collapse-all');
    await page.fill('#search-input', 'Bovidae');
    await expect(page.locator('#search-results')).toContainText('牛科');

    await page.fill('#search-input', '');
    await page.click('#lang-switch');
    await page.fill('#search-input', 'Bats');
    await expect(page.locator('#search-results')).toContainText('Bats');
    await expect(page.locator('#search-results')).toContainText('Chiroptera');
});

test('missing runtime dependency produces a retryable error state', async ({ page }) => {
    await page.route('**/vendor/three.min.js', route => route.abort('internetdisconnected'));
    await page.goto('/');

    await expect(page.locator('#loading-screen')).toHaveAttribute('role', 'alert');
    await expect(page.locator('#loading-screen')).toContainText(/初始化失败|could not start/);
    await expect(page.locator('.retry-btn')).toBeVisible();
    await expect(page.locator('#enter-btn')).toBeDisabled();
    expect(await page.evaluate(() => window.mammaliaApp.state)).toBe('error');
});

test('tree details dialog supports keyboard opening, closing, and focus restore', async ({ page }) => {
    await page.goto('/');
    await page.click('#enter-btn');
    const bovidaeText = page.locator('.node text[aria-label="查看详情: 牛科"]');
    await bovidaeText.focus();
    await page.keyboard.press('Enter');

    await expect(page.locator('#modal')).toHaveAttribute('aria-hidden', 'false');
    await expect(page.locator('#modal-close')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#modal')).toHaveAttribute('aria-hidden', 'true');
    await expect(bovidaeText).toBeFocused();
});

test('viewport allows zoom and layout does not overflow horizontally', async ({ page }) => {
    await page.goto('/');
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).not.toContain('user-scalable=no');
    expect(viewport).not.toContain('maximum-scale');
    const dimensions = await page.evaluate(() => ({ scrollWidth: document.body.scrollWidth, width: innerWidth }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.width);
});

test('supports direct file preview without a server', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop coverage is sufficient for the file protocol.');
    const fileUrl = pathToFileURL(path.resolve(__dirname, '../../index.html')).href;
    await page.goto(fileUrl);
    await expect(page.locator('#loading-screen')).toBeHidden();
    await expect(page.locator('#enter-btn')).toBeEnabled();
    await expect(page.locator('.card-img').first()).toHaveAttribute('src', /assets\/images\/.+\.webp$/);
});

test('normal-motion transition completes without lifecycle errors', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop coverage is sufficient for the animation lifecycle.');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/');
    await page.click('#enter-btn');
    await expect(page.locator('#container-viz > svg')).toBeVisible({ timeout: 5000 });
    await page.waitForTimeout(3000);
    expect(errors).toEqual([]);
    expect(await page.evaluate(() => window.mammaliaApp.state)).toBe('tree');
});

test('has no serious automated accessibility violations', async ({ page }) => {
    await page.goto('/');
    await page.click('#enter-btn');
    await page.click('#btn-info');
    const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
    const serious = results.violations.filter(violation =>
        violation.impact === 'serious' || violation.impact === 'critical'
    );
    expect(serious).toEqual([]);
});
