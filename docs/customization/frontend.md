---
id: frontend
title: Customizing CSS and JavaScript
---

All static assets are located in subdirectories of `/saleor/static/`.

#### CSS
Stylesheets are written in [Sass](http://sass-lang.com/) and rely on [postcss](http://postcss.org/) and [autoprefixer](https://autoprefixer.github.io/) for cross-browser compatibility.

#### JavaScript
JavaScript code is written according to the ES2015 standard and relies on [Babel](https://babeljs.io/) for transpilation and browser-specific polyfills.

#### Webpack Module Bundler 
Everything is compiled together using [webpack module bundler](https://webpack.github.io/).

For your convenience, have the webpack automatically track changes made locally during the development. Additionally, this will also enable source maps that are extremely helpful when debugging.

To run webpack in _watch_ mode run:

```console
$ npm start
```
The resulting files are written to `/saleor/static/assets/` and should not be edited manually.

> **Note**
>
> Files produced this way are not ready for production use. 
>To prepare static assets for deployment run:
>
> ```console
> $ npm run build-assets --production
> ```