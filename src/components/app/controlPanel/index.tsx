import * as React from "react";
import { selectors, actions, RootState } from "../../../redux";
import { useSelector, useDispatch } from "react-redux";
import SearchSkill from "./searchSkill";
import SkillPresentation from "./skillPresentation";
import Header from "./header";

function ControlPanel() {
  const mode = useSelector(selectors.ui.getMode);

  return (
    <>
      <Header mode={mode} />
      {mode === "SHOW_LIST" && <SearchSkill />}
      {mode === "SHOW_SKILL" && (
        <>
          <SearchSkill />
          <SkillPresentation />
        </>
      )}
    </>
  );
}

export default ControlPanel;
