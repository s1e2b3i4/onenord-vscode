const test = require('node:test');
const assert = require('node:assert');
const { readFileSync } = require('fs');
const { join } = require('path');
const compileTheme = require('../scripts/compile-theme');

const theme = compileTheme(
    readFileSync(join(__dirname, '..', 'src', 'one-nord.yml'), 'utf-8')
);

const HEX_COLOR = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

test('every workbench color is a valid hex color', () => {
    const invalid = Object.entries(theme.colors).filter(
        ([, color]) => !HEX_COLOR.test(color)
    );
    assert.deepStrictEqual(invalid, []);
});

test('every token and semantic token color is a valid hex color', () => {
    const colors = [
        ...theme.tokenColors.flatMap(({ scope, settings }) =>
            [settings.foreground, settings.background].map((color) => [scope, color])
        ),
        ...Object.entries(theme.semanticTokenColors).map(([selector, style]) => [
            selector,
            typeof style === 'string' ? style : style.foreground,
        ]),
    ];
    const invalid = colors.filter(
        ([, color]) => color !== undefined && !HEX_COLOR.test(color)
    );
    assert.deepStrictEqual(invalid, []);
});

test('no token scope is listed twice', () => {
    const scopes = theme.tokenColors
        .flatMap(({ scope }) => [].concat(scope ?? []))
        .flatMap((scope) => scope.split(','))
        .map((scope) => scope.trim());
    const duplicates = scopes.filter((scope, i) => scopes.indexOf(scope) !== i);
    assert.deepStrictEqual(duplicates, []);
});
