const { readFile } = require('fs').promises;
const { join } = require('path');
const { defineSequenceTag, YAML11_SCHEMA, load } = require('js-yaml');

const withAlphaTag = defineSequenceTag('!alpha', {
    create: () => [],
    addItem: (carrier, item) => {
        carrier.push(item);
    },
    finalize: ([hexRGB, alpha]) => hexRGB.concat(alpha),
});

const schema = YAML11_SCHEMA.withTags(withAlphaTag);

module.exports = async () => {
    const yamlFile = await readFile(
        join(__dirname, '..', 'src', 'one-nord.yml'),
        'utf-8'
    );

    const base = load(yamlFile, { schema });

    // Remove nulls and other falsey values from colors
    for (const key of Object.keys(base.colors)) {
        if (!base.colors[key]) {
            delete base.colors[key];
        }
    }

    return {
        base,
    };
};
