import React from "react";
import { InputHTMLAttributes } from "react";
import FieldWrapper from "./components/FieldWrapper";
import FIELD_MODIFIERS from "./constants/fieldModifiers";
import Icon from "../Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  modifiers?: typeof FIELD_MODIFIERS[number] | typeof FIELD_MODIFIERS[number][];
  label?: string;
  message?: string;
  icon?: string;
}

function Input({ modifiers, label, message, icon, ...rest }: InputProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, type: "input" }}>
      <input {...rest} />
      {icon && <Icon icon={icon} size={22} />}
    </FieldWrapper>
  );
}

export default Input;
