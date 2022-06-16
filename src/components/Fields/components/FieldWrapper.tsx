import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import Icon from "../../Icon";

import FIELD_TYPES from "../constants/fieldTypes";
import baseStyles from "../styles/base";
import modifiersStyles from "../styles/modifiers";
import FieldProps from "../models/FieldProps";

// TODO: modifiers, label, message and icon are common types in different files
// Should reconsider setting a type and importing in the files
interface FieldWrapperProps extends FieldProps {
  iconPos?: "left" | "right";
  type: typeof FIELD_TYPES[number];
  children?: React.ReactNode;
}

const StyledFieldWrapper = styled.label<FieldWrapperProps>`
  ${(props) => baseStyles(props.theme, props.type, props.icon, props.iconPos)}
  ${applyStyleModifiers(modifiersStyles)}
`;

function FieldWrapper({
  modifiers,
  label,
  message,
  icon,
  iconPos = "left",
  type,
  children,
}: FieldWrapperProps) {
  const isRadioOrCheck = (type: typeof FIELD_TYPES[number]) =>
    ["radio", "checkbox"].includes(type);

  return (
    <StyledFieldWrapper {...{ modifiers, icon, iconPos, type }}>
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
