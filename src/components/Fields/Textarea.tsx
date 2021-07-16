import React, { TextareaHTMLAttributes } from "react";
import FieldWrapper from "./components/FieldWrapper";
import FieldProps from "./models/FieldProps";

export interface TextareaProps
  extends FieldProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ modifiers, label, message, icon, ...rest }) => {
    return (
      <FieldWrapper {...{ modifiers, label, message, icon, type: "input" }}>
        <textarea {...rest} />
      </FieldWrapper>
    );
  }
);

export default Textarea;
