## What's in inside the box:

- [![React](https://img.shields.io/badge/React-v17.0.13-007ACC?logo=react)](https://github.com/facebook/react/blob/main/CHANGELOG.md#1702-march-22-2021)

- [![StyledComponents](https://img.shields.io/badge/Styled Components-v5.3.0-007ACC?logo=styled-components)](https://styled-components.com/releases#v5.3.0)

- [![Redux](https://img.shields.io/badge/Redux-v7.2.4-007ACC?logo=redux)](https://newreleases.io/project/npm/react-redux/release/7.2.4)

- [![ReduxSaga](https://img.shields.io/badge/Redux Saga-v1.1.3-007ACC?logo=redux-saga)](https://newreleases.io/project/npm/react-redux/release/7.2.4)

- [![Stylelint](https://img.shields.io/badge/Stylelint-v13.13.1-007ACC?logo=stylelint)](https://stylelint.io/changelog/#13131)

- [![Node](https://img.shields.io/badge/Node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/dist/latest-v14.x/docs/api/)

- [![TypeScript](https://img.shields.io/badge/TypeScript-v4.2.2-007ACC?logo=typescript)](https://www.typescriptlang.org/)

- [![Jest](https://img.shields.io/badge/Jest-v26.0.23-C21325?logo=jest)](https://jestjs.io/)

## Prepare && Start

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

⚠️ Before you go, check your Node version with `node --version` (must be _>=14.0.0_).

Open the terminal at the this project root folder then run:

```shell
yarn install // >=1.22.10
```

### Generators

```shell
yarn generate
```

Allows you to auto-generate boilerplate code for common parts of your application, specifically components, and redux-toolkit slices. You can also run `yarn generate` to skip the first selection (e.g., `yarn generate component`).

### Start

```shell
yarn start // development environment
```

```shell
yarn start:prod // production environment
```

- Builds your app (see `yarn run build`)
- Serves the build folder locally

The app is built for optimal performance; assets are minified and served `gzip-ed`.

### Testing

```shell
yarn test
```

Unit tests specified in the `**/__tests__/*.ts` files throughout the application are run.
All the test commands allow an optional `-- [string]` argument to filter the tests run by Jest, useful if you need to run a specific test only.

```shell
yarn test -- Button // Run only the Button component tests
```

### Storybook

```shell
yarn storybook
```

It makes development faster and easier by isolating components.

### Linting

```shell
yarn lint
```

Lints your Typescript and your CSS.

```shell
yarn lint:fix
```

Lints your code and tries to fix any errors it finds.

### Extracting translation JSON Files

```shell
yarn extract-messages
```

### Typescript

```shell
yarn checkTs
```

Checks for TypeScript errors.

---

## Features

<dl>

  <dt>Predictable state management</dt>

  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages.</dd>

  <dt>Typescript</dt>
  <dd>Typescript is the key to scalability. Build self-documented code, easy-to-debug code and create maintainable large applications and codebases with a highly productive development experience.</dd>

  <dt>Storybook</dt>
  <dd>This allows you to work on one component at a time. Developing entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.
  </dd>

  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>SEO</dt>
  <dd>Support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

<sub><i>Keywords: Create React App, Typescript, React.js, Redux, Hot Reloading, ESNext, Babel, react-router, styled-components, redux-saga, FontFaceObserver</i></sub>
