import CheckBoxInput from "./checkBox";
import ColorInput from "./color";
import SelectionInput from "./selection";
import SelectionListInput from "./selectionList";
import TextInput from "./text";
import TextAreaInput from "./textArea";
import checkSelectionList from "./checkSelectionList";

export interface InputProps {
  componentClass?: string;
  labelClass?: string;
  inputClass?: string;
  label?: string;
}

export { CheckBoxInput, ColorInput, SelectionInput, SelectionListInput, TextInput, TextAreaInput, checkSelectionList };
