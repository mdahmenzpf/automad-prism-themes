# Automad Prism Themes

A modern collection of syntax highlighting themes for [Prism](https://prismjs.com).

> [!NOTE]
> This is a fork of the [PrismJS/prism-themes](https://github.com/PrismJS/prism-themes) repository. All included themes are optimized to work with Automad. New themes have been added, some have been removed.

---

<!-- vim-markdown-toc GFM -->

- [Themes](#themes)
- [How to use a Theme](#how-to-use-a-theme)
- [Customizing](#customizing)

<!-- vim-markdown-toc -->

## Themes

The following themes are included. Some of them have been ported over to Prism from VS Code. You can find more information about the theme authors and source repositpries in the file headers inside the [themes](themes) directory.

<!-- gallery-start -->

|                                   ![Atom Dark](screenshots/prism-atom-dark.png)<br>[Atom Dark](themes/prism-atom-dark.css)                                   |                             ![Aura Dark](screenshots/prism-aura-dark.png)<br>[Aura Dark](themes/prism-aura-dark.css)                             |                   ![Boola Dark](screenshots/prism-boola-dark.png)<br>[Boola Dark](themes/prism-boola-dark.css)                   |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
|                               ![Boola Light](screenshots/prism-boola-light.png)<br>[Boola Light](themes/prism-boola-light.css)                               |             ![Catppuccin Frappe](screenshots/prism-catppuccin-frappe.png)<br>[Catppuccin Frappe](themes/prism-catppuccin-frappe.css)             |       ![Catppuccin Latte](screenshots/prism-catppuccin-latte.png)<br>[Catppuccin Latte](themes/prism-catppuccin-latte.css)       |
|             ![Catppuccin Macchiato](screenshots/prism-catppuccin-macchiato.png)<br>[Catppuccin Macchiato](themes/prism-catppuccin-macchiato.css)             |               ![Catppuccin Mocha](screenshots/prism-catppuccin-mocha.png)<br>[Catppuccin Mocha](themes/prism-catppuccin-mocha.css)               |               ![Coldark Cold](screenshots/prism-coldark-cold.png)<br>[Coldark Cold](themes/prism-coldark-cold.css)               |
|                             ![Coldark Dark](screenshots/prism-coldark-dark.png)<br>[Coldark Dark](themes/prism-coldark-dark.css)                             |                           ![Dark Frost](screenshots/prism-dark-frost.png)<br>[Dark Frost](themes/prism-dark-frost.css)                           |                   ![Dark Space](screenshots/prism-dark-space.png)<br>[Dark Space](themes/prism-dark-space.css)                   |
|                                       ![Dracula](screenshots/prism-dracula.png)<br>[Dracula](themes/prism-dracula.css)                                       |                       ![Duotone Dark](screenshots/prism-duotone-dark.png)<br>[Duotone Dark](themes/prism-duotone-dark.css)                       |             ![Duotone Earth](screenshots/prism-duotone-earth.png)<br>[Duotone Earth](themes/prism-duotone-earth.css)             |
|                         ![Duotone Forest](screenshots/prism-duotone-forest.png)<br>[Duotone Forest](themes/prism-duotone-forest.css)                         |                     ![Duotone Light](screenshots/prism-duotone-light.png)<br>[Duotone Light](themes/prism-duotone-light.css)                     |                 ![Duotone Sea](screenshots/prism-duotone-sea.png)<br>[Duotone Sea](themes/prism-duotone-sea.css)                 |
|                           ![Duotone Space](screenshots/prism-duotone-space.png)<br>[Duotone Space](themes/prism-duotone-space.css)                           |                         ![Github Dark](screenshots/prism-github-dark.png)<br>[Github Dark](themes/prism-github-dark.css)                         |               ![Github Light](screenshots/prism-github-light.png)<br>[Github Light](themes/prism-github-light.css)               |
|                             ![Gruvbox Dark](screenshots/prism-gruvbox-dark.png)<br>[Gruvbox Dark](themes/prism-gruvbox-dark.css)                             |                     ![Gruvbox Light](screenshots/prism-gruvbox-light.png)<br>[Gruvbox Light](themes/prism-gruvbox-light.css)                     |                   ![Holi Theme](screenshots/prism-holi-theme.png)<br>[Holi Theme](themes/prism-holi-theme.css)                   |
|                                   ![Hopscotch](screenshots/prism-hopscotch.png)<br>[Hopscotch](themes/prism-hopscotch.css)                                   |                             ![Laserwave](screenshots/prism-laserwave.png)<br>[Laserwave](themes/prism-laserwave.css)                             |                         ![Lucario](screenshots/prism-lucario.png)<br>[Lucario](themes/prism-lucario.css)                         |
|                           ![Material Dark](screenshots/prism-material-dark.png)<br>[Material Dark](themes/prism-material-dark.css)                           |                   ![Material Light](screenshots/prism-material-light.png)<br>[Material Light](themes/prism-material-light.css)                   |       ![Material Oceanic](screenshots/prism-material-oceanic.png)<br>[Material Oceanic](themes/prism-material-oceanic.css)       |
|   ![Monochrome Dark Amplified](screenshots/prism-monochrome-dark-amplified.png)<br>[Monochrome Dark Amplified](themes/prism-monochrome-dark-amplified.css)   |   ![Monochrome Dark Subtle](screenshots/prism-monochrome-dark-subtle.png)<br>[Monochrome Dark Subtle](themes/prism-monochrome-dark-subtle.css)   |         ![Monochrome Dark](screenshots/prism-monochrome-dark.png)<br>[Monochrome Dark](themes/prism-monochrome-dark.css)         |
| ![Monochrome Light Amplified](screenshots/prism-monochrome-light-amplified.png)<br>[Monochrome Light Amplified](themes/prism-monochrome-light-amplified.css) | ![Monochrome Light Subtle](screenshots/prism-monochrome-light-subtle.png)<br>[Monochrome Light Subtle](themes/prism-monochrome-light-subtle.css) |       ![Monochrome Light](screenshots/prism-monochrome-light.png)<br>[Monochrome Light](themes/prism-monochrome-light.css)       |
|                                   ![Night Owl](screenshots/prism-night-owl.png)<br>[Night Owl](themes/prism-night-owl.css)                                   |                                       ![Nord](screenshots/prism-nord.png)<br>[Nord](themes/prism-nord.css)                                       |                       ![One Dark](screenshots/prism-one-dark.png)<br>[One Dark](themes/prism-one-dark.css)                       |
|                                   ![One Light](screenshots/prism-one-light.png)<br>[One Light](themes/prism-one-light.css)                                   |                                     ![Panda](screenshots/prism-panda.png)<br>[Panda](themes/prism-panda.css)                                     |                   ![Poimandres](screenshots/prism-poimandres.png)<br>[Poimandres](themes/prism-poimandres.css)                   |
|                                     ![Pojoaque](screenshots/prism-pojoaque.png)<br>[Pojoaque](themes/prism-pojoaque.css)                                     |                   ![Rose Pine Dawn](screenshots/prism-rose-pine-dawn.png)<br>[Rose Pine Dawn](themes/prism-rose-pine-dawn.css)                   |                     ![Rose Pine](screenshots/prism-rose-pine.png)<br>[Rose Pine](themes/prism-rose-pine.css)                     |
|                       ![Sea Shells Dark](screenshots/prism-sea-shells-dark.png)<br>[Sea Shells Dark](themes/prism-sea-shells-dark.css)                       |               ![Shades Of Purple](screenshots/prism-shades-of-purple.png)<br>[Shades Of Purple](themes/prism-shades-of-purple.css)               | ![Solarized Dark Atom](screenshots/prism-solarized-dark-atom.png)<br>[Solarized Dark Atom](themes/prism-solarized-dark-atom.css) |
|                               ![Synthwave84](screenshots/prism-synthwave84.png)<br>[Synthwave84](themes/prism-synthwave84.css)                               |             ![Tokyo Night Light](screenshots/prism-tokyo-night-light.png)<br>[Tokyo Night Light](themes/prism-tokyo-night-light.css)             |     ![Tokyo Night Storm](screenshots/prism-tokyo-night-storm.png)<br>[Tokyo Night Storm](themes/prism-tokyo-night-storm.css)     |
|                               ![Tokyo Night](screenshots/prism-tokyo-night.png)<br>[Tokyo Night](themes/prism-tokyo-night.css)                               |                       ![Violet Dream](screenshots/prism-violet-dream.png)<br>[Violet Dream](themes/prism-violet-dream.css)                       |             ![Vsc Dark Plus](screenshots/prism-vsc-dark-plus.png)<br>[Vsc Dark Plus](themes/prism-vsc-dark-plus.css)             |

<!-- gallery-end -->

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
  --am-prism-padding: 1rem;
  --am-prism-border-radius: 0.3em;
  --am-prism-font-size: 0.875rem;
  --am-prism-font-family: ui-monospace;
  --am-prism-line-height: 1.5;
}
```
