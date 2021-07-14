import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import baseStyles from "./styles";
import modifiersStyles from "./modifiersStyles";

const StyledFieldWrapper = styled.div`
  ${baseStyles}
  ${applyStyleModifiers(modifiersStyles)}
`;

function FieldWrapper({ modifiers, message, children, style = {} }) {
  return (
    <StyledFieldWrapper {...{ modifiers, style }}>
      {children}

      {message && <div className="field-message">{message}</div>}
    </StyledFieldWrapper>
  );
}

export default FieldWrapper;
