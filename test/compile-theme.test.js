const test = require('node:test');
const assert = require('node:assert');
const compileTheme = require('../scripts/compile-theme');

test('!alpha appends the alpha channel to a hex color', () => {
    const theme = compileTheme(`
colors:
  editor.background: !alpha [ '#112233', '80' ]
`);
    assert.strictEqual(theme.colors['editor.background'], '#11223380');
});

test('colors left empty in the source are omitted', () => {
    const theme = compileTheme(`
colors:
  editor.background: '#112233'
  editor.foreground:
  editor.lineHighlightBackground: ~
`);
    assert.deepStrictEqual(theme.colors, { 'editor.background': '#112233' });
});
