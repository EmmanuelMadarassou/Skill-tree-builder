import * as React from "react";
import styles from "./selection.module.scss";
import { InputProps } from "../";

interface SelectInputProps extends InputProps {
  selected: string | number;
  options: { value: string | number; label: string }[];
  onChange: Function;
}

const SelectInput = ({
  label,
  selected,
  onChange,
  options,
  componentClass,
  labelClass,
  inputClass,
}: SelectInputProps) => {
  return (
    <div className={styles.container + " " + componentClass}>
      <label className={styles.label + " " + labelClass}>{label}:</label>
      <select
        className={styles.input + " " + inputClass}
        value={selected}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {options.map((option, i) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
