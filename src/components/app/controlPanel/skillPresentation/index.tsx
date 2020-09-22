import * as React from "react";
import { selectors, actions, RootState } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { Skill, skillSelectors } from "../../../../redux/ducks/skill";

function SkillPresentation() {
  const skillid = useSelector(selectors.skill.getSelectedSkill);
  const skill = useSelector((state: RootState) =>
    selectors.skill.selectById(state, skillid)
  );

  const requires: string[] = skill
    ? [skill.cost_value + " " + skill.cost + " points"]
    : [];

  return (
    <div>
      {skill ? (
        <>
          <div className="item">{skill.label}</div>
          <p>Accessible at level {skill.access_level}</p>
          <p>{skill.description}</p>
        </>
      ) : (
        <>
          <p>Error: trying to display a non existent selected skill</p>
        </>
      )}
      <ul>
        <p>Requires</p>
        {requires.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillPresentation;
