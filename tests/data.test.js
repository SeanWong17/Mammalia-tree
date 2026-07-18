const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const { validateProject } = require('../scripts/validate-data');

const projectRoot = path.resolve(__dirname, '..');

function loadData() {
    const context = {};
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(projectRoot, 'data/data.js'), 'utf8')};this.data=mammalsData`, context);
    return JSON.parse(JSON.stringify(context.data));
}

function loadDataUtils() {
    const context = {
        d3: { hierarchy: data => ({ data }) },
        console
    };
    vm.createContext(context);
    vm.runInContext(`${fs.readFileSync(path.join(projectRoot, 'src/js/utils.js'), 'utf8')};this.utils=DataUtils`, context);
    return context.utils;
}

function findNode(root, key) {
    if (root.taxon_key === key) return root;
    for (const child of root.children || []) {
        const match = findNode(child, key);
        if (match) return match;
    }
    return null;
}

test('taxonomy, times, and hashed image assets are internally consistent', () => {
    assert.deepEqual(validateProject(projectRoot), {
        clades: 95,
        families: 167,
        images: 167,
        root: 'Mammalia'
    });
});

test('hierarchy preserves English common names separately from scientific keys', () => {
    const hierarchy = loadDataUtils().buildHierarchy(loadData());
    const bats = findNode(hierarchy.data, 'Chiroptera');
    assert.ok(bats);
    assert.equal(bats.en_name, 'Bats');
    assert.equal(bats.scientific_name, 'Chiroptera');
});

test('hierarchy rejects missing parents instead of silently dropping nodes', () => {
    const data = loadData();
    data.clades.Chiroptera.parent = 'MissingParent';
    assert.throws(() => loadDataUtils().buildHierarchy(data), /Missing parent/);
});
