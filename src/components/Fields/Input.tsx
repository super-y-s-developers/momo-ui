import React, { InputHTMLAttributes } from "react";
import FieldWrapper from "./components/FieldWrapper";
import FieldProps from "./models/FieldProps";

export interface InputProps
  extends FieldProps,
    InputHTMLAttributes<HTMLInputElement> {
  iconPos?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { modifiers, label, message, icon, iconPos, ...rest } = props;
  return (
    <FieldWrapper
      {...{ modifiers, label, message, icon, iconPos, type: "input" }}
    >
      <input {...rest} ref={ref} />
    </FieldWrapper>
  );
});

export default Input;
