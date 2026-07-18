const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const copies = [
    ['node_modules/d3/dist/d3.min.js', 'vendor/d3.min.js'],
    ['node_modules/three/build/three.min.js', 'vendor/three.min.js'],
    ['node_modules/three/examples/js/renderers/CSS3DRenderer.js', 'vendor/CSS3DRenderer.js'],
    ['node_modules/three/examples/js/controls/OrbitControls.js', 'vendor/OrbitControls.js'],
    ['node_modules/@tweenjs/tween.js/dist/tween.umd.js', 'vendor/tween.umd.js'],
    ['node_modules/d3/LICENSE', 'vendor/licenses/D3-LICENSE'],
    ['node_modules/three/LICENSE', 'vendor/licenses/THREE-LICENSE'],
    ['node_modules/@tweenjs/tween.js/LICENSE', 'vendor/licenses/TWEEN-LICENSE'],
    ['node_modules/@fontsource-variable/noto-serif-sc/LICENSE', 'vendor/licenses/NOTO-SERIF-SC-LICENSE']
];

for (const [sourceRelative, targetRelative] of copies) {
    const source = path.join(projectRoot, sourceRelative);
    const target = path.join(projectRoot, targetRelative);
    if (!fs.existsSync(source)) throw new Error(`Dependency file is missing: ${sourceRelative}`);

    if (checkOnly) {
        if (!fs.existsSync(target) || !fs.readFileSync(source).equals(fs.readFileSync(target))) {
            throw new Error(`Vendored dependency is stale: ${targetRelative}`);
        }
    } else {
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(source, target);
    }
}

const fontSourceDir = path.join(projectRoot, 'node_modules/@fontsource-variable/noto-serif-sc/files');
const fontTargetDir = path.join(projectRoot, 'assets/fonts/noto-serif-sc');
const fontFiles = fs.readdirSync(fontSourceDir).filter(file => file.endsWith('.woff2')).sort();
const sourceCss = fs.readFileSync(
    path.join(projectRoot, 'node_modules/@fontsource-variable/noto-serif-sc/index.css'),
    'utf8'
);
const generatedCss = `/* Generated from @fontsource-variable/noto-serif-sc. */\n${sourceCss}`
    .replaceAll("font-family: 'Noto Serif SC Variable';", "font-family: 'Noto Serif SC';")
    .replaceAll('url(./files/', 'url(../../assets/fonts/noto-serif-sc/');
const cssTarget = path.join(projectRoot, 'src/css/noto-serif-sc.css');

if (checkOnly) {
    if (!fs.existsSync(cssTarget) || fs.readFileSync(cssTarget, 'utf8') !== generatedCss) {
        throw new Error('Self-hosted Noto Serif SC stylesheet is stale');
    }
    const targetFiles = fs.existsSync(fontTargetDir)
        ? fs.readdirSync(fontTargetDir).filter(file => file.endsWith('.woff2')).sort()
        : [];
    if (JSON.stringify(targetFiles) !== JSON.stringify(fontFiles)) {
        throw new Error('Self-hosted Noto Serif SC file list is stale');
    }
    for (const file of fontFiles) {
        if (!fs.readFileSync(path.join(fontSourceDir, file)).equals(fs.readFileSync(path.join(fontTargetDir, file)))) {
            throw new Error(`Self-hosted font file is stale: ${file}`);
        }
    }
} else {
    fs.mkdirSync(fontTargetDir, { recursive: true });
    for (const file of fontFiles) {
        fs.copyFileSync(path.join(fontSourceDir, file), path.join(fontTargetDir, file));
    }
    fs.writeFileSync(cssTarget, generatedCss);
}

console.log(checkOnly ? 'Vendored dependencies are current.' : 'Vendored dependencies updated.');
