import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import baseStyles from "./baseStyles";
import modifiersStyles from "./modifiersStyles";

const StyledFieldWrapper = styled.div`
  ${baseStyles}
  ${applyStyleModifiers(modifiersStyles)}
`;

function FieldWrapper({ modifiers, label, message, children }) {
  return (
    <StyledFieldWrapper {...{ modifiers }}>
      {label && <span className="field-header">{label}</span>}

      {children}

      {message && <div className="field-message">{message}</div>}
    </StyledFieldWrapper>
  );
}

export default FieldWrapper;
