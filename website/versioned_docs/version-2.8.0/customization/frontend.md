---
id: frontend
title: Customizing CSS and JavaScript
---

All static assets live in subdirectories of `/saleor/static/`.

Stylesheets are written in [Sass](http://sass-lang.com/) and rely on [postcss](http://postcss.org/) and [autoprefixer](https://autoprefixer.github.io/) for cross-browser compatibility.

JavaScript code is written according to the ES2015 standard and relies on [Babel](https://babeljs.io/) for transpilation and browser-specific polyfills.

Everything is compiled together using [webpack module bundler](https://webpack.github.io/).

The resulting files are written to `/saleor/static/assets/` and should not be edited manually.

During development it’s very convenient to have webpack automatically track changes made locally. This will also enable source maps that are extremely helpful when debugging.

To run webpack in _watch_ mode run:

```shell-session
$ npm start
```

> **Warning**
>
> Files produced this way are not ready for production use. To prepare static assets for deployment run:
>
> ```shell-session
> $ npm run build-assets --production
> ```