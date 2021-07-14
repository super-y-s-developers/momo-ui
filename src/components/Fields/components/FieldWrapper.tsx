import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import FIELD_TYPES from "../constants/fieldTypes";
import FIELD_MODIFIERS from "../constants/fieldModifiers";
import baseStyles from "../styles/base";
import modifiersStyles from "../styles/modifiers";

type FieldWrapperProps = {
  modifiers?: typeof FIELD_MODIFIERS[number] | typeof FIELD_MODIFIERS[number][];
  label?: string;
  message?: string;

  type: typeof FIELD_TYPES[number];
  children?: React.ReactNode;
};

const StyledFieldWrapper = styled.div`
  ${baseStyles}
  ${applyStyleModifiers(modifiersStyles)}
`;

function FieldWrapper({
  modifiers,
  label,
  message,
  type,
  children,
}: FieldWrapperProps) {
  const isRadioOrCheck = (type: typeof FIELD_TYPES[number]) =>
    ["radio", "checkbox"].includes(type);

  return (
    <StyledFieldWrapper {...{ modifiers }}>
      {label && !isRadioOrCheck(type) && (
        <span className="field-header">{label}</span>
      )}
      <div>
        {children}

        {label && isRadioOrCheck(type) && (
          <span className="field-text">{label}</span>
        )}
      </div>
      {message && <div className="field-message">{message}</div>}
    </StyledFieldWrapper>
  );
}

export default FieldWrapper;
