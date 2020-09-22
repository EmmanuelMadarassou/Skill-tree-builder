import * as React from "react";
import styles from "./selectionList.module.scss";
import { SelectionInput } from "../";
import { BasicButton } from "../../button";
import { InputProps } from "../";
import { log } from "console";

interface SelectionListProps extends InputProps {
  selected: string | number;
  options: { value: string | number; label: string }[];
  selectedOptions: string[];
  onChange: Function;
  onAdd: Function;
  onDelete: Function;
}

const SelectionListInput = ({ componentClass, inputClass, labelClass, label, selected, options, selectedOptions, onAdd, onChange, onDelete }: SelectionListProps) => {
  return (
    <div className={styles.container + " " + componentClass}>
      <div className={styles.inputContainer + " " + inputClass}>
        <SelectionInput componentClass={labelClass} label={label} selected={selected} options={options} onChange={onChange} />
        <BasicButton
          className={styles.button}
          label="Add"
          fafa=""
          onClick={() => {
            onAdd(selected);
          }}
          style="basic"
        />
      </div>

      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {selectedOptions.map((value, i) => {
            const index = options.findIndex((o) => {
              return value == o.value;
            });
            const option = options[index];

            return (
              <>
                <li className={styles.itemlist} key={option.value}>
                  <span className={styles.label}>{option.label}</span>
                  <BasicButton
                    className={styles.itemListButton}
                    label=""
                    fafa="fas fa-times"
                    onClick={() => {
                      onDelete(i);
                    }}
                    style="danger"
                  />
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectionListInput;
