import * as React from "react";
import { selectors, actions } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";

function SearchSkill() {
  const skills = useSelector(selectors.skill.selectEntities);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" placeholder="Search skill..." id="searchInput"></input>
      <select name="option" id="searchOption">
        <option value="name">Order by name</option>
        <option value="depth">Order by depth</option>
      </select>
      {Object.values(skills).map((skill) => {
        if (skill != undefined) {
          return (
            <div
              key={skill.id}
              className="item"
              onClick={() => dispatch(actions.skill.selectSkill(skill.id))}
            >
              {skill.label}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SearchSkill;
