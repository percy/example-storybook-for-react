# TodoMVC example using Storybook for React

This is the example storybook that's used in [Percy's Storybook for React tutorial](https://percy.io/docs/tutorials/storybook-for-react).

It's originally a fork of Kadira's [React Storybook demo](https://github.com/kadira-samples/react-storybook-demo).

## Running Percy

```bash
npm install
export PERCY_TOKEN=<your project token>
npm run snapshot        # every story
npm run snapshot:smoke  # only stories tagged `visual-smoke`
```

## Storybook features Percy picks up

These need `@percy/storybook` 10.1.0 or later. Older versions ignore them (they log an
"Invalid config" / "Invalid Storybook parameters" warning and snapshot as before), except
`--include-tags`, which they reject as an unknown option.

| Feature | Where | Result |
|---|---|---|
| Story viewport | `Percy Features` stories set `globals.viewport` to `mobile1` and a custom `kiosk` option (`.storybook/preview.js`) | Captured at 320px and 600px instead of the project widths |
| Modes | `.percy.yml` `storybook.modes` with a `dark` theme global (theme decorator in `.storybook/preview.js`) | Each story also gets a `<story> [dark]` snapshot |
| Vision simulation | `Percy Features: vision modes` sets `parameters.percy.modes` with the `@storybook/addon-a11y` `vision: 'deuteranopia'` global | Adds a `[deuteranopia]` snapshot; a story-level list replaces the `.percy.yml` one |
| Tags | `tags: ['visual-smoke']` on `Header` and `vision modes` | `percy storybook --include-tags visual-smoke` (or `storybook.tags.include`) snapshots only those |

The stories use CSF3, so there is no `.test()` story: Storybook test entries need CSF Next.
Percy skips test entries by default (`storybook.captureTestEntries: true` captures them).
