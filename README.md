# Automad Prism Themes

A modern [collection](https://automadcms.github.io/automad-prism-themes) of syntax highlighting themes for [Prism](https://prismjs.com).

> [!IMPORTANT]
> This is a fork of the [PrismJS/prism-themes](https://github.com/PrismJS/prism-themes) repository. All included themes are optimized to work with Automad. New themes have been added, some have been removed.

| [Visit the Theme Gallery](https://automadcms.github.io/automad-prism-themes) |
| :--------------------------------------------------------------------------: |

---

<!-- vim-markdown-toc GFM -->

- [Included Themes](#included-themes)
- [How to use a Theme](#how-to-use-a-theme)
- [Customizing](#customizing)
- [Adding new Themes](#adding-new-themes)

<!-- vim-markdown-toc -->

## Included Themes

A gallery with screenshots of all included themes can be found [here](https://automadcms.github.io/automad-prism-themes).

## How to use a Theme

To use one of the themes, just include the theme's CSS file in your page. Example:

```html
<!doctype html>
<html>
  <head>
    ...
    <link
      href="https://unpkg.com/automad-prism-themes/dist/prism-tokyo-night.css"
      rel="stylesheet"
    />
  </head>
  <body>
    ...
    <script src="https://unpkg.com/prismjs@1.29.0/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
  </body>
</html>
```

## Customizing

Some basic theme settings are exposed using CSS custom properties. These properties can be defined for better integration into a site's theme.

```css
:root {
  --am-prism-padding-y: 1rem;
  --am-prism-padding-x: 1rem;
  --am-prism-border-width: 1px;
  --am-prism-border-radius: 0.3em;
  --am-prism-font-size: 0.875rem;
  --am-prism-font-family: ui-monospace;
  --am-prism-line-height: 1.5;
}
```

## Adding new Themes

Follow these steps in order to add a new theme:

1. Add a new `.css` file following the `prism-[theme].css` naming pattern including the theme styles.
2. Remove all common styles that are already defined in `themes/base.css`. (See other themes)
3. Preview the theme in the included PHP testing page. (`index.php`)
4. Generate missing screenshots:
   ```bash
   npm run screenshots
   ```
