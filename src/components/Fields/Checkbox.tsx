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

function Checkbox({
  modifiers,
  label,
  message,
  disabled,
  ...rest
}: InputProps) {
  return (
    <label>
      <FieldWrapper {...{ modifiers, label, message }}>
        <CheckboxInput {...{ disabled, ...rest }} type="checkbox" />

        {label && (
          <span className={`field-text${disabled ? " disabled" : ""}`}>
            {label}
          </span>
        )}
      </FieldWrapper>
    </label>
  );
}

export default Checkbox;
