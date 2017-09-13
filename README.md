# netguru-react-scripts

## Motivation

The idea behind this project is to provide a solid foundation for **Single Page Apps**, in the same time to reduce* the amount of cases when eject needs to be used.

<sup>* reduce does not mean completely disallow</p>

## Features
- ✅ React Hot Loader,
- ✅ SCSS,
- ✅ CSS Modules,
- ✅ Eslint with Airbnb config,
- ✅ Stylelint,
- ✅ "Absolute" imports configured for src directory,
- ✅ Normalize.css,

## Usage
```sh
yarn global add create-react-app
create-react-app project-name --scripts-version netguru-react-scripts
```

## Create React App should not expose any configs, why there is a stylelint and eslint config present?

Exposing stylelint and eslint config allows for **out of the box** real time validation in the code editor.

## How can I update to the latest version?

```sh
yarn upgrade netguru-react-scripts
```

Since linter configs are exposed they may need to be updated manually. Check the release notes for instructions regarding that.

### Frequently asked questions

#### 1. I want to eject because feature I need is not available

We might add additional features that are not strictly project-related. Please create a issue describing your needs and we will figure something out.

#### 2. I don't want to use CSS Modules, what should I do?
Change this lines in the package.json
```json
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test --env=jsdom",
```
to:
```json
"start": "CSS_MODULES=false react-scripts start",
"build": "CSS_MODULES=false react-scripts build",
"test": "CSS_MODULES=false react-scripts test --env=jsdom",
```

#### 3. SCSS and CSS Modules, WTF?
With this approach we can benefit from what is best from those two worlds. We can use SCSS syntax for mixins, variables etc. and still have our rules scoped to the component ;)

How to use it? Since there is no global scope we need to implicitly import our variables/mixins etc. Check the `src/Components/App/style.scss` file. On the first line it imports the shared styles with variables and mixins.

#### 4. How do I import global styles from third-party packages?
Importing any stylesheet from JS (with CSS Modules enabled) will convert class names into unique identifiers. By design, this prevents them from being used for global styles. If you have, say, a third-party component that provides some "regular" SCSS/CSS code, you will want to import it from an SCSS file instead, like so:
```
:global {
  @import '~react-select/dist/react-select';
}
```
