import * as React from "react";
import styles from "./text.module.scss";
import { InputProps } from "../";

interface TextInputProps extends InputProps {
  value: string;
  lettersNum: number;
  onChange: Function;
}

const TextInput = ({ componentClass, labelClass, inputClass, label, value, lettersNum, onChange }: TextInputProps) => {
  const inputStyle = {
    width: lettersNum * 9 + "px",
  };

  return (
    <div className={styles.container + " " + componentClass}>
      <label className={styles.label}>{label}:</label>
      <div className={styles.inputContainer}>
        <input style={inputStyle} className={styles.input} type="text" value={value} onChange={(e) => onChange(e)}></input>
        <div className={styles.underline}></div>
      </div>
    </div>
  );
};

export default TextInput;
