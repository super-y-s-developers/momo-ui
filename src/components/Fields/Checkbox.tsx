import styled from "styled-components";
import { defaultTheme } from "../../utils";
import FieldWrapper from "./components/FieldWrapper";
import { InputProps } from "./Input";

// TODO: as the appearance is none we need to redo checked status styles
const CheckboxInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  padding: 1px 2px !important;
  border-radius: 5px !important;
  cursor: pointer;

  &:checked {
    border-color: ${defaultTheme.inputBorderColorFocus};
    background-color: ${defaultTheme.inputBorderColorFocus};
    /* show check mark icon from phosphor */
    &::after {
      content: "\f465";
      color: white;
      font-family: "Phosphor" !important;
      font-style: normal !important;
      font-weight: normal !important;
    }
  }
`;

function Checkbox({ modifiers, label, message, ...rest }: InputProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, type: "checkbox" }}>
      <CheckboxInput {...rest} type="checkbox" />
    </FieldWrapper>
  );
}

export default Checkbox;
