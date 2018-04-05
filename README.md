# Test Latest Tooling

Configure tooling compatible with our existing Webpack 3 configuration and development (eslint, prettier) and build output (single deployment directory with Express server).

## Webpack 4

Working through a step-by-step configuration of Webpack 4 that provides same tooling as my current Webpack 3 version.

[Webpack 4](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4) 

## React 16.3

React 16 brings new `context` api and lifecycle methods and looks to deprecate some existing lifecycle methods:

[React v16.3](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

JSX Fragment syntax requires [Babel 7](https://babeljs.io/blog/2017/09/12/planning-for-7.0):

[Support for Fragment syntax](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html#support-for-fragment-syntax)

## Other

Common libraries/components for:

- [Styled Components](https://github.com/styled-components/styled-components),  [styled-theming](https://github.com/styled-components/styled-theming), and [stylelint](https://stylelint.io/)
- [styled-system](http://jxnblk.com/styled-system/)
- [Tachyons functional CSS](https://tachyons.io/)
- Flow (Type checking)
- Logging
- Testing (Jest, Cypress, [react-test-library](https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65))
- i18n
- [Apollo GraphQL](https://www.apollographql.com/)
- Web workers when it makes sense using [workerize](https://github.com/developit/workerize)