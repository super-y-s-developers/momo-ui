import { InputHTMLAttributes } from "react";
import MODIFIERS from "./constants/modifiers";
import FieldWrapper from "./FieldWrapper";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  modifiers?: typeof MODIFIERS[number] | typeof MODIFIERS[number][];
  label?: string;
  icon?: string;
  message?: string;
}

function Input({ modifiers, label, icon, message, ...rest }: InputProps) {
  return (
    <label>
      <FieldWrapper {...{ modifiers, label, message }}>
        <input {...rest} />
      </FieldWrapper>
    </label>
  );
}

export default Input;
