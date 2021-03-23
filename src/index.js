import React from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "components/Buttons";

const App = () => (
  <div>
    <h1>Holanda 👋</h1>
    <PrimaryButton>Primary Button</PrimaryButton>
    <SecondaryButton>Secondary Button</SecondaryButton>
    <TertiaryButton>Tertiary Button</TertiaryButton>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
