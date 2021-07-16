import React from "react";
import FieldWrapper from "./components/FieldWrapper";
import FieldProps from "./models/FieldProps";

const Textarea = React.forwardRef<HTMLTextAreaElement, FieldProps>(
  ({ modifiers, label, message, icon, ...rest }) => {
    return (
      <FieldWrapper {...{ modifiers, label, message, icon, type: "input" }}>
        <textarea {...rest} />
      </FieldWrapper>
    );
  }
);

export default Textarea;
