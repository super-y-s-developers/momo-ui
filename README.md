# Momo UI - Design System

![Momo UI logo](./public/logos/isologo/296x80-bg.png?raw=true "Momo UI logo")

The _Comic relief_ design system for React.js projects.

Our goal is to create a design system that is lightweight for the user and contrasts with the stress situations they may be experiencing. As a result we want them to have a fun and quiet experience 😌

## Check it out

We use Storybook to document and review the development of our design system. There you will find what components do we have, how they look, and what code you should use to implement them.

[See our storybook](https://super-y-s-developers.github.io/momo-ui)

## Use it in your app

Momo UI components are developed with [React.js](https://reactjs.org/) using [styled-components](https://styled-components.com/). To set general styles and use it in your own React project, follow these instructions:

1. Install the npm [momo-ui package](https://www.npmjs.com/package/@superys/momo-ui) in your project

```
yarn add @superys/momo-ui

or

npm i @superys/momo-ui
```

2. Load fonts and icons ([phosphor icons](https://phosphoricons.com/)) in your `public/index.html` head tag

```html
<head>
  ...

  <!-- Load Google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito+Sans:wght@300;400;600;700&family=Quicksand:wght@400;700&display=swap"
    rel="stylesheet"
  />

  <!-- Load Phosphor icons -->
  <script src="https://unpkg.com/phosphor-icons"></script>
</head>
```

3. Wrap everything with `MomoStyleWrapper` before your app is mounted (probably `src/index.jsx`)

```jsx
...
import { MomoStyleWrapper } from "@superys/momo-ui";
...

ReactDOM.render(
  <React.StrictMode>
    <MomoStyleWrapper>
      <App />
    </MomoStyleWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
```

4. Use the **components** in your app! [Check our storybook](https://super-y-s-developers.github.io/momo-ui) to see the available components and how to sue them.

```jsx
import { Button } from "@superys/momo-ui";

function App() {
  return (
    <div>
      ...
      <Button>You got it!</Button>
    </div>
  );
}
```

5. (Optional) Use the **utils** variables (colors, type scales, fonts, etc) in case you need them!

```jsx
import styled from 'styled-components';
import { yellow } from '@superys/momo-ui';

const WarningBox = styled.div`
  border: 2px solid ${yellow[300]};
  background-color: ${yellow[200]};
`
```

### Create a custom theme

We know you love our colors and style! But we also know you might need to tweak them sometimes to match your brand. You can do it by creating a custom theme, based on our `defaultTheme` and passing it to the `MomoStyleWrapper`.

```jsx
...
import { MomoStyleWrapper, defaultTheme, neutral } from "@superys/momo-ui";
...

const pink = { [300]: "#EF6AC3", [400]: "#EF6AC3" };

const customTheme = {
  ...defaultTheme,
  palettes: { ...defaultTheme.palettes, pink },
  primary: { main: pink[400], hover: pink[300], contrast: neutral[100] },
};

ReactDOM.render(
  <React.StrictMode>
    <MomoStyleWrapper theme={customTheme}>
      <App />
    </MomoStyleWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
```

You're ready to go. To know more about momo-ui components, please [check our storybook](https://super-y-s-developers.github.io/momo-ui) where you will find everything you need to use our components.

## Get involved

We're still working hard to make momo-ui grow and be available for anyone. If you'd like to contribute designing or coding, please get in touch! yelis124@gmail.com

- Find ways to contribute [contribution docs in progress ...]
- Prep to commit code [code-contribution docs in progress ...]

## Run Storybook locally

Install [nvm](https://github.com/nvm-sh/nvm)

```
nvm install
nvm use
```

Install dependencies and Run the storybook in `localhost:6006`

```
yarn
yarn storybook
```

## Usage License

The idea is that anyone can use this design system in their projects, as long as the result source code is open to the public. We use the GNU GENERAL PUBLIC LICENSE Version 3.
