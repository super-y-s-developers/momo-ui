import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <main>
    <h1>Buttons 👆</h1>
    <h2 className="subtitle">Let's see the button states</h2>

    <h3>Default</h3>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Tertiary</TertiaryButton>

    <h3>Disabled</h3>
    <PrimaryButton disabled>Primary</PrimaryButton>
    <SecondaryButton disabled>Secondary</SecondaryButton>
    <TertiaryButton disabled>Tertiary</TertiaryButton>

    <GlobalStyle />
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));
