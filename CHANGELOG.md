# OneNord Changelog

## [0.6.2] – 2026-08-01

### Fixed

- Distinguished `type`/`interface`/`namespace` from `class` in semantic colors, and broadened `class.declaration` to plain `class` so non-declaration references are colored too ([#19](https://github.com/s1e2b3i4/onenord-vscode/pull/19))
- Filled in remaining find-match/word-highlight colors: `editor.wordHighlightTextBackground`, `searchEditor.findMatchBackground`, `editorOverviewRuler.wordHighlightTextForeground` ([#20](https://github.com/s1e2b3i4/onenord-vscode/issues/20))
- Ported build script off js-yaml v4's removed `Type`/`DEFAULT_SCHEMA` API to v5's `defineSequenceTag`/`YAML11_SCHEMA`

### Security

- Bumped `@vscode/vsce`, `js-yaml`, and transitive deps (`tar-fs`, `tmp`, `minimatch`, `brace-expansion`, `qs`, `markdown-it`, `linkify-it`) to resolve all open Dependabot alerts

## [0.6.1] – 2026-08-01

### Added

- Inline URL link injection grammar (highlights URLs inside strings across languages)
- Editor sticky scroll link color
- Module decorator semantic color

### Fixed

- Removed invalid `testing.message.error.decorationForeground` key

## [0.6.0] – 2026-06-27

### Added

- Editor sticky scroll colors
- Command center colors
- Chat and inline chat colors
- Notification icon and banner colors
- Terminal sticky scroll, find match, and command decoration colors
- Diff editor line/gutter/overview and merge editor colors
- Testing, comments, and profile badge colors

## [0.5.2] – 2025-01-31

### Added

- Add more colors for the csv rainbow extension

## [0.5.0] – 2024-03-02

### Updated

- Add js scripts for dynamic color theme #5

### Added

- Better peek view result colors #15
- Fix some semantic colors #17
- Add semantic default library colors #18
- Align terminal colors #11
- Better selection colors #13
- Add GitHub actions for automatic publishing #21

## [0.3.0] – 2023-10-29

### Added

- Better Ruby support (Thanks to @Uaitt)
- Improve Python and sematic colors
- Adjust Terminal Colors [#7](https://github.com/s1e2b3i4/onenord-vscode/issues/7)

## [0.2.0] – 2023-08-29

### Added

- Add more semantic token colors (Thanks to @xiyaowong)

## [0.0.1] – 2023-06-10

### Added

- Initial editor color theming, still subject to change so any suggestions are highly appreciated!

[0.0.1]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.0.1
[0.2.0]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.2.0
[0.3.0]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.3.0
[0.5.0]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.5.0
[0.5.2]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.5.2
[0.6.0]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.6.0
[0.6.1]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.6.1
[0.6.2]: https://github.com/s1e2b3i4/onenord-vscode/commits/v0.6.2
