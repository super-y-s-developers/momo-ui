import React from "react";
import FieldWrapper from "./components/FieldWrapper";
import FIELD_MODIFIERS from "./constants/fieldModifiers";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  modifiers?: typeof FIELD_MODIFIERS[number] | typeof FIELD_MODIFIERS[number][];
  label?: string;
  message?: string;
  icon?: string;
}

function Input({ modifiers, label, message, icon, ...rest }: TextareaProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, icon, type: "input" }}>
      <textarea {...rest} />
    </FieldWrapper>
  );
}

export default Input;
