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
    <h2 className="subtitle">States</h2>

    <h3>Default</h3>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Tertiary</TertiaryButton>

    <h3>Disabled</h3>
    <PrimaryButton disabled>Primary</PrimaryButton>
    <SecondaryButton disabled>Secondary</SecondaryButton>
    <TertiaryButton disabled>Tertiary</TertiaryButton>

    <h3>Focused, Hover & active</h3>
    <p>Check these states by interacting with the buttons.</p>

    <br />
    <h2 className="subtitle">Modifiers</h2>

    <h3>Small</h3>
    <PrimaryButton modifiers="small">Primary</PrimaryButton>
    <SecondaryButton modifiers="small">Secondary</SecondaryButton>
    <TertiaryButton modifiers="small">Tertiary</TertiaryButton>

    <h3>Large</h3>
    <PrimaryButton modifiers="large">Primary</PrimaryButton>
    <SecondaryButton modifiers="large">Secondary</SecondaryButton>
    <TertiaryButton modifiers="large">Tertiary</TertiaryButton>

    <h3>Warning</h3>
    <PrimaryButton modifiers="warning">Primary</PrimaryButton>
    <SecondaryButton modifiers={["warning", "warningSecondary"]}>Secondary</SecondaryButton>
    <TertiaryButton modifiers={["warning", "warningTertiary"]}>Tertiary</TertiaryButton>

    <h3>Error</h3>
    <PrimaryButton modifiers="error">Primary</PrimaryButton>
    <SecondaryButton modifiers={["error", "errorSecondary"]}>Secondary</SecondaryButton>
    <TertiaryButton modifiers={["error", "errorTertiary"]}>Tertiary</TertiaryButton>

    <h3>Success</h3>
    <PrimaryButton modifiers="success">Primary</PrimaryButton>
    <SecondaryButton modifiers={["success", "successSecondary"]}>Secondary</SecondaryButton>
    <TertiaryButton modifiers={["success", "successTertiary"]}>Tertiary</TertiaryButton>

    <GlobalStyle />
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));
