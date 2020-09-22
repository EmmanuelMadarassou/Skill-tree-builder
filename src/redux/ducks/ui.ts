import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState, actions, selectors, AppThunk } from "..";
import { Action } from "redux";
import { useSelector } from "react-redux";

/**
 * --- Types ----
 */

export type Mode = "SHOW_LIST" | "SHOW_SKILL" | "EDIT_SKILL";

export type UiSlice = {
  mode: Mode;
};

/**
 * --- Selectors ----
 */

const getMode = (state: RootState) => state.ui.mode;

/**
 * --- Pure actions----
 */

function set_mode(state: UiSlice, action: PayloadAction<{ mode: Mode }>) {
  const { mode } = action.payload;
  state.mode = mode;
}

/**
 * --- Thunk actions ----
 */

export const showHome = (): AppThunk => async (dispatch) => {
  dispatch(actions.ui.setMode({ mode: "SHOW_LIST" }));
  dispatch(actions.skill.emptySelection());
};

/**
 * --- reducer ----
 */

let initialState: UiSlice = {
  mode: "SHOW_LIST",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setMode: set_mode,
  },
});

export const uiActions = {
  ...uiSlice.actions,
  showHome,
};
export const uiSelectors = {
  getMode,
};
export default uiSlice.reducer;
