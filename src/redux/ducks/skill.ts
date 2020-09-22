import {
  createSlice,
  createEntityAdapter,
  EntityState,
  PayloadAction,
  createSelector,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Action } from "redux";
import { RootState, actions, selectors, AppThunk } from "../";
import { useSelector } from "react-redux";

/**
 * --- Types ----
 */

export interface Skill {
  label: string;
  id: number;
  mastery: number;
  parent_skill: number;
  access_level: number;
  cost: string;
  cost_value: number;
  background_color: number[];
  font_color: number[];
  description: string;
  required_skills: number[];
  next_skills: number[];
}

export interface SkillSlice extends EntityState<Skill> {
  selected_skill: number;
}

/**
 * --- Selectors ----
 */

const getSelectedSkill = (state: RootState) => state.skill.selected_skill;

/**
 * --- Pure actions----
 */

const select_skill = (
  state: SkillSlice,
  action: PayloadAction<{ id: number }>
) => {
  const { id } = action.payload;
  state.selected_skill = id;
};

/**
 * --- Thunk actions ----
 */

export const selectSkill = (id: number): AppThunk => async (dispatch) => {
  dispatch(actions.skill.pureSelectSkill({ id: id }));
  dispatch(actions.ui.setMode({ mode: "SHOW_SKILL" }));
};

export const emptySelection = (): AppThunk => async (dispatch) => {
  dispatch(actions.skill.pureSelectSkill({ id: -1 }));
};

/**
 * --- Reducer ----
 */

const skillAdapter = createEntityAdapter<Skill>({});

const initialState: SkillSlice = skillAdapter.getInitialState({
  selected_skill: -1,
});

const skillSlice = createSlice({
  name: "skill",
  initialState: initialState,
  reducers: {
    addSkill: skillAdapter.addOne,
    removeSkill: skillAdapter.removeOne,
    updateSkill: skillAdapter.updateOne,
    pureSelectSkill: select_skill,
  },
});

export const skillActions = {
  ...skillSlice.actions,
  selectSkill,
  emptySelection,
};
export const skillSelectors = {
  ...skillAdapter.getSelectors((state: RootState) => state.skill),
  getSelectedSkill,
};

export default skillSlice.reducer;
