import React from "react";
import styles from "./app.module.scss";

import { BasicButton } from "../common/button";

import {
  TextInput,
  CheckBoxInput,
  SelectionInput,
  ColorInput,
  TextAreaInput,
  SelectionListInput,
  checkSelectionList,
} from "../common/input";
import CheckSelectionListInput from "../common/input/checkSelectionList";
import { ChangeEvent } from "react";

const onChange = (e: any) => {
  console.log("onChange", e);
};

const onClick = (e: any) => {
  console.log("onClick", e);
};

const onCheck = (e: any) => {
  console.log("onCheck", e);
};

const onAdd = (e: any) => {
  console.log("onAdd", e);
};

const onDelete = (e: any) => {
  console.log("onDelete", e);
};
const onCheckVal = (e: ChangeEvent<HTMLInputElement>) => {
  console.log("onCheckcsq", e.target.value);
};

function App() {
  return (
    <>
      <TextInput
        label="Name"
        value="Divine blessing"
        lettersNum={15}
        onChange={onChange}
      />
      <CheckBoxInput
        label="Is a level up skill"
        value={"true"}
        checked={false}
        ref={null}
        before={false}
        onCheck={onCheck}
      />
      <SelectionInput
        label="Cost"
        selected={"xp"}
        options={[
          { value: "xp", label: "Experience points" },
          { value: "light", label: "Light points" },
        ]}
        onChange={onChange}
      />
      <ColorInput
        label="Background color"
        color="#e66465"
        onChange={onChange}
      />
      <TextAreaInput
        label=""
        value="You can throw fire balls bitches !"
        onChange={onChange}
      />
      <BasicButton label="Add skill" onClick={onClick} style="basic" />
      <BasicButton label="Add skill" onClick={onClick} style="discreet" />
      <BasicButton label="Add skill" onClick={onClick} style="important" />
      <SelectionListInput
        label="Antecedents"
        selected="0"
        options={[
          { value: 0, label: "Water ball" },
          { value: 1, label: "Tsunami" },
        ]}
        selectedOptions={[]}
        onAdd={onAdd}
        onChange={onChange}
        onDelete={onDelete}
      />
      <CheckSelectionListInput
        label="From "
        selected={0}
        options={[
          { value: 0, label: "Main tree " },
          { value: 1, label: "Second tree" },
        ]}
        checkAll={false}
        values={[
          {
            value: 0,
            label: "Water ball",
            checked: false,
            info: "level 9",
          },
          {
            value: 1,
            label: "Tsunami",
            checked: false,
            info: "level 10",
          },
        ]}
        onChange={onChange}
        onCheck={onCheckVal}
        onCheckAll={onCheck}
      />
    </>
  );
}

export default App;
