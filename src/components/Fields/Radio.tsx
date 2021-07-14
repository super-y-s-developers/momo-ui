import styled from "styled-components";
import { defaultTheme } from "../../utils";
import FieldWrapper from "./components/FieldWrapper";
import { InputProps } from "./Input";

// TODO: as the appearance is none we need to redo checked status styles
const RadioInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  padding: 0 !important;
  border-radius: 50% !important;

  &:checked {
    border-color: ${defaultTheme.inputBorderColorFocus};
    /* show blue dot */
    & + .radio-control {
      position: absolute;
      left: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${defaultTheme.inputBorderColorFocus};
    }
  }
`;

function Radio({ modifiers, label, message, ...rest }: InputProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, type: "radio" }}>
      <RadioInput {...rest} type="radio" />
      <span className="radio-control"></span>
    </FieldWrapper>
  );
}

export default Radio;
