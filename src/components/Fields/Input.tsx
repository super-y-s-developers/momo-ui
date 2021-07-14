import React from "react";
import { InputHTMLAttributes } from "react";
import FieldWrapper from "./components/FieldWrapper";
import MODIFIERS from "./constants/fieldModifiers";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  modifiers?: typeof MODIFIERS[number] | typeof MODIFIERS[number][];
  label?: string;
  message?: string;
  icon?: string;
}

function Input({ modifiers, label, message, icon, ...rest }: InputProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, type: "input" }}>
      <input {...rest} />
    </FieldWrapper>
  );
}

export default Input;
