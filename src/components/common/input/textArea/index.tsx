import * as React from "react";
import styles from "./textArea.module.scss";
import { InputProps } from "..";

interface TextAreaInputProps extends InputProps {
  value: string;
  onChange: Function;
}

const TextAreaInput = ({ componentClass, inputClass, labelClass, label, value, onChange }: TextAreaInputProps) => {
  return (
    <div className={styles.container + " " + componentClass}>
      <label className={styles.label + " " + labelClass}>{label}</label>
      <textarea className={styles.input + " " + inputClass} value={value} onChange={(e) => onChange(e)}></textarea>
    </div>
  );
};

export default TextAreaInput;
