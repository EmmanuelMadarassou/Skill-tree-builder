import * as React from "react";
import styles from "./CheckSelectionList.module.scss";
import { SelectionInput, CheckBoxInput } from "../";
import { InputProps } from "../";
import { ChangeEvent, MouseEvent } from "react";
import { useRef } from "react";

interface CheckSelectionListProps extends InputProps {
  options: Option[];
  selected: string | number;
  checkAll: boolean;
  values: CheckOption[];
  onChange: Function;
  onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckAll: Function;
}

interface Option {
  value: string | number;
  label: string;
}

interface CheckOption extends Option {
  checked: boolean;
  info: string;
}

const CheckSelectionListInput = ({
  componentClass,
  inputClass,
  labelClass,
  label,
  options,
  selected,
  checkAll,
  values,
  onChange,
  onCheck,
  onCheckAll,
}: CheckSelectionListProps) => {
  return (
    <div className={styles.container + " " + componentClass}>
      <SelectionInput
        componentClass={labelClass}
        inputClass={inputClass}
        label={label}
        selected={selected}
        options={options}
        onChange={onChange}
      />
      <div className={styles.inputContainer}>
        <ul className={styles.list}>
          <li className={styles.itemlist}>
            <CheckBoxInput
              componentClass={styles.checkAll}
              before={true}
              label={"Check all"}
              value={"checkAll"}
              checked={false}
              onCheck={onCheckAll}
            />
          </li>
          <div className={styles.listContainer}>
            {values.map((option, i) => (
              <ChekSelectionRow
                key={option.value}
                option={option}
                index={i}
                onCheck={onCheck}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

interface CheckSelectionRowProps {
  option: CheckOption;
  index: number;
  onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChekSelectionRow = ({
  option,
  index,
  onCheck,
}: CheckSelectionRowProps) => {
  const checkRef = useRef<HTMLInputElement>(null);

  return (
    <li
      className={styles.itemlist + " " + styles.input}
      key={option.value}
      onClick={(e: MouseEvent) => {
        if (checkRef?.current && !e.currentTarget.contains(checkRef.current)) {
          checkRef.current.click();
        }
      }}
    >
      <CheckBoxInput
        componentClass={styles.check}
        before={true}
        label={option.label}
        value={index}
        ref={checkRef}
        checked={option.checked}
        onCheck={(e: ChangeEvent<HTMLInputElement>) => {
          onCheck(e);
        }}
      />
      <div className={styles.info}>
        <span>{option.info}</span>
      </div>
    </li>
  );
};

export default CheckSelectionListInput;
