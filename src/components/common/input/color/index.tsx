import * as React from "react";
import styles from "./color.module.scss";
import { InputProps } from "../";

interface ColorInputProps extends InputProps {
  componentClass?: string;
  labelClass?: string;
  label: string;
  color: string;
  onChange: Function;
}

const ColorInput = ({ componentClass, inputClass, labelClass, color, label, onChange }: ColorInputProps) => {
  return (
    <div className={styles.container + " " + componentClass}>
      <label className={styles.label + " " + labelClass}>{label}:</label>
      <input type="color" className={styles.input + " " + inputClass} value={color} onChange={(e) => onChange(e)}></input>
    </div>
  );
};

export default ColorInput;
