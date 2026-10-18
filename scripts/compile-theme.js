const { defineSequenceTag, YAML11_SCHEMA, load } = require('js-yaml');

const withAlphaTag = defineSequenceTag('!alpha', {
    create: () => [],
    addItem: (carrier, item) => {
        carrier.push(item);
    },
    finalize: ([hexRGB, alpha]) => hexRGB.concat(alpha),
});

const schema = YAML11_SCHEMA.withTags(withAlphaTag);

module.exports = (yamlText) => {
    const theme = load(yamlText, { schema });

    // Remove nulls and other falsey values from colors
    for (const key of Object.keys(theme.colors)) {
        if (!theme.colors[key]) {
            delete theme.colors[key];
        }
    }

    return theme;
};
