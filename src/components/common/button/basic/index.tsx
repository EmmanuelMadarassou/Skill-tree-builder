import * as React from "react";
import styles from "./button.module.scss";

type StyleButton = "important" | "basic" | "discreet" | "danger";

interface BasicButtonProps {
  className?: string;
  label?: string;
  fafa?: string;
  fafaBefore?: boolean;
  onClick: Function;
  style: StyleButton;
}

const BasicButton = ({
  className,
  label,
  fafa,
  style,
  onClick,
  fafaBefore,
}: BasicButtonProps) => {
  return (
    <button
      className={
        styles.button +
        " " +
        className +
        " " +
        styles[style] +
        " " +
        (label != "" ? styles.textButton : styles.fafaButton)
      }
      onClick={(e) => onClick(e)}
    >
      {fafaBefore && <i className={fafa + " " + styles.before}></i>}
      {label}
      {!fafaBefore && fafa != "" && (
        <i className={fafa + " " + styles.after}></i>
      )}
    </button>
  );
};

export default BasicButton;
