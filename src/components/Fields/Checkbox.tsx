import styled from "styled-components";
import { defaultTheme } from "../../utils";
import FieldWrapper from "./components/FieldWrapper";
import { InputProps } from "./Input";

const CheckboxInput = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  padding: 0 !important;
  border-radius: 5px !important;
`;

function Checkbox({ modifiers, label, message, ...rest }: InputProps) {
  return (
    <FieldWrapper {...{ modifiers, label, message, type: "checkbox" }}>
      <CheckboxInput {...rest} type="checkbox" />
    </FieldWrapper>
  );
}

export default Checkbox;
