const fs = require('fs');
const path = require('path');
const compileTheme = require('./compile-theme');

const SOURCE = path.join(__dirname, '..', 'src', 'one-nord.yml');
const THEME_DIR = path.join(__dirname, '..', 'theme');

module.exports = async () => {
    const theme = compileTheme(await fs.promises.readFile(SOURCE, 'utf-8'));

    await fs.promises.mkdir(THEME_DIR, { recursive: true });
    await fs.promises.writeFile(
        path.join(THEME_DIR, 'one-nord.json'),
        JSON.stringify(theme, null, 4)
    );
};

if (require.main === module) {
    module.exports();
}
