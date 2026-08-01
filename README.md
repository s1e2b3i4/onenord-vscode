# 🏔 OneNord for Visual Studio Code

[![Visual Studio Marketplace Version](https://vsmarketplacebadges.dev/version/s1e2b3i4.onenord-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=s1e2b3i4.onenord-vscode)
[![Visual Studio Marketplace Installs](https://vsmarketplacebadges.dev/installs/s1e2b3i4.onenord-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=s1e2b3i4.onenord-vscode)

![Screenshot of some Python code to showcase the theme](https://github.com/s1e2b3i4/onenord-vscode/assets/28140755/c0617326-0b47-4a1f-9931-946793424d36)

## About

OneNord is a clean and vibrant theme that combines the Nord and Atom One Dark color palettes.

This theme is based on the awesome [OneNord for JetBrains IDEs Theme](https://github.com/rmehri01/onenord-jetbrains) by [Ryan Mehri](https://github.com/rmehri01).

## Installation

1. Open **Extensions** in VS Code (`Ctrl`/`Cmd` + `Shift` + `X`).
2. Search for **OneNord** and install it.
3. Open the theme picker (`Ctrl`/`Cmd` + `K` then `Ctrl`/`Cmd` + `T`) and select **OneNord**.

Or install from the command line:

```sh
code --install-extension s1e2b3i4.onenord-vscode
```

## Development

The theme is generated from a single source file, `src/one-nord.yml`. Never edit `theme/one-nord.json` by hand — it is built output.

```sh
npm install
npm run build      # regenerate theme/one-nord.json from src/one-nord.yml
npm run package    # build the .vsix into ./bin
```

Press `F5` in VS Code to launch an Extension Development Host with the theme loaded for live testing.

## License

[GPL-3.0-or-later](./LICENSE)
