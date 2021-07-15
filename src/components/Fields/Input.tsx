import React from "react";
import FieldWrapper from "./components/FieldWrapper";
import FIELD_MODIFIERS from "./constants/fieldModifiers";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  modifiers?: typeof FIELD_MODIFIERS[number] | typeof FIELD_MODIFIERS[number][];
  label?: string;
  message?: string;
  icon?: string;
  iconPos?: "left" | "right";
}

function Input({
  modifiers,
  label,
  message,
  icon,
  iconPos,
  ...rest
}: InputProps) {
  return (
    <FieldWrapper
      {...{ modifiers, label, message, icon, iconPos, type: "input" }}
    >
      <input {...rest} />
    </FieldWrapper>
  );
}

export default Input;
