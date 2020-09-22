import * as React from "react";
import styles from "./checkBox.module.scss";
import { InputProps } from "../";
import { Ref } from "react";

interface CheckInputProps extends InputProps {
  value: string | number;
  checked: boolean;
  before?: boolean;
  onCheck: Function;
}

const CheckInput = React.forwardRef(
  (
    {
      componentClass,
      inputClass,
      labelClass,
      onCheck,
      label,
      checked,
      before,
      value,
    }: CheckInputProps,
    ref?: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.container + " " + componentClass}>
        {!before && (
          <label className={styles.label + " " + labelClass}>{label} </label>
        )}
        <input
          className={styles.input + " " + inputClass}
          type="checkbox"
          checked={checked}
          value={value}
          ref={ref}
          onChange={(e) => {
            onCheck(e);
          }}
        />
        {before && (
          <label className={styles.label + " " + labelClass}>{label} </label>
        )}
      </div>
    );
  }
);

export default CheckInput;
