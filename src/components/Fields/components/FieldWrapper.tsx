import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import Icon from "../../Icon";

import FIELD_TYPES from "../constants/fieldTypes";
import FIELD_MODIFIERS from "../constants/fieldModifiers";
import baseStyles from "../styles/base";
import modifiersStyles from "../styles/modifiers";

// TODO: modifiers, label, message and icon are common types in different files
// Should reconsider setting a type and importing in the files
type FieldWrapperProps = {
  modifiers?: typeof FIELD_MODIFIERS[number] | typeof FIELD_MODIFIERS[number][];
  label?: string;
  message?: string;
  icon?: string;

  type: typeof FIELD_TYPES[number];
  children?: React.ReactNode;
};

const StyledFieldWrapper = styled.label<FieldWrapperProps>`
  ${(props) => baseStyles(props.type, props.icon)}
  ${applyStyleModifiers(modifiersStyles)}
`;

function FieldWrapper({
  modifiers,
  label,
  message,
  icon,
  type,
  children,
}: FieldWrapperProps) {
  const isRadioOrCheck = (type: typeof FIELD_TYPES[number]) =>
    ["radio", "checkbox"].includes(type);

  return (
    <StyledFieldWrapper {...{ modifiers, icon, type }}>
      {label && !isRadioOrCheck(type) && (
        <span className="field-header">{label}</span>
      )}
      <div className="field-content">
        {children}
        {icon && <Icon className="field-icon" icon={icon} size={22} />}
        {label && isRadioOrCheck(type) && (
          <span className="field-text">{label}</span>
        )}
      </div>
      {message && <div className="field-message">{message}</div>}
    </StyledFieldWrapper>
  );
}

export default FieldWrapper;
