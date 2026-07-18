const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadGlobalScript(filePath, expression) {
    const context = {};
    vm.createContext(context);
    const source = fs.readFileSync(filePath, 'utf8');
    vm.runInContext(`${source};this.__result=${expression}`, context, { filename: filePath });
    return context.__result;
}

function validateProject(projectRoot = path.resolve(__dirname, '..')) {
    const data = loadGlobalScript(path.join(projectRoot, 'data/data.js'), 'mammalsData');
    const manifest = loadGlobalScript(path.join(projectRoot, 'data/images_manifest.js'), 'IMAGE_MANIFEST');
    const clades = Object.entries(data.clades || {});
    const families = data.families || [];
    const cladeKeys = new Set(clades.map(([key]) => key));
    const familyKeys = families.map(family => family.family_en);
    const allKeys = new Set([...cladeKeys, ...familyKeys]);
    const roots = clades.filter(([, clade]) => !clade.parent).map(([key]) => key);

    if (roots.length !== 1) throw new Error(`Expected one root, found ${roots.length}`);
    if (new Set(familyKeys).size !== familyKeys.length) throw new Error('Duplicate family keys found');
    if (allKeys.size !== cladeKeys.size + familyKeys.length) throw new Error('Clade/family key collision found');
    if (data.meta?.total_clades !== clades.length) throw new Error('Clade metadata count is stale');
    if (data.meta?.total_families !== families.length) throw new Error('Family metadata count is stale');

    const visitState = new Map();
    const visit = key => {
        if (visitState.get(key) === 'visiting') throw new Error(`Hierarchy cycle includes ${key}`);
        if (visitState.get(key) === 'done') return;
        visitState.set(key, 'visiting');
        const clade = data.clades[key];
        if (clade?.parent) visit(clade.parent);
        visitState.set(key, 'done');
    };

    for (const [key, clade] of clades) {
        if (clade.parent && !cladeKeys.has(clade.parent)) {
            throw new Error(`Missing parent ${clade.parent} for clade ${key}`);
        }
        visit(key);
    }

    const records = [
        ...clades.map(([key, value]) => ({ key, value, parent: value.parent })),
        ...families.map(value => ({ key: value.family_en, value, parent: value.parent_clade }))
    ];
    for (const record of records) {
        const time = Number(record.value.divergence_time_mya);
        if (!Number.isFinite(time) || time < 0 || time > 255) {
            throw new Error(`Invalid divergence time for ${record.key}`);
        }
        if (record.parent) {
            if (!cladeKeys.has(record.parent)) throw new Error(`Missing parent ${record.parent} for ${record.key}`);
            const parentTime = Number(data.clades[record.parent].divergence_time_mya);
            if (time > parentTime) throw new Error(`${record.key} is older than parent ${record.parent}`);
        }
    }

    const manifestKeys = Object.keys(manifest);
    if (manifestKeys.length !== families.length) throw new Error('Image manifest count does not match families');
    for (const familyKey of familyKeys) {
        const relativePath = manifest[familyKey];
        if (!relativePath) throw new Error(`Missing image manifest entry for ${familyKey}`);
        const imagePath = path.join(projectRoot, relativePath);
        if (!fs.existsSync(imagePath)) throw new Error(`Missing image file for ${familyKey}`);
        const image = fs.readFileSync(imagePath);
        if (image.length < 12 || image.subarray(0, 4).toString() !== 'RIFF' || image.subarray(8, 12).toString() !== 'WEBP') {
            throw new Error(`Invalid WebP image for ${familyKey}`);
        }
        const hashMatch = path.basename(imagePath).match(/\.([a-f0-9]{12})\.webp$/);
        const actualHash = crypto.createHash('sha256').update(image).digest('hex').slice(0, 12);
        if (!hashMatch || hashMatch[1] !== actualHash) throw new Error(`Stale image hash for ${familyKey}`);
    }
    for (const manifestKey of manifestKeys) {
        if (!familyKeys.includes(manifestKey)) throw new Error(`Unexpected image manifest entry: ${manifestKey}`);
    }

    return { clades: clades.length, families: families.length, images: manifestKeys.length, root: roots[0] };
}

if (require.main === module) {
    const summary = validateProject();
    console.log(`Validated ${summary.clades} clades, ${summary.families} families, and ${summary.images} images.`);
}

module.exports = { validateProject };
