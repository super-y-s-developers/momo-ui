import FIELD_MODIFIERS from "../constants/fieldModifiers";

export default interface FieldProps {
  modifiers?: typeof FIELD_MODIFIERS[number] | typeof FIELD_MODIFIERS[number][];
  label?: string;
  message?: string;
  icon?: string;
}
