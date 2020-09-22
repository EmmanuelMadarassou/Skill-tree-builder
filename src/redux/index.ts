/*
What the user can do:
###Show list
-click(add skill): show edit panel with new skill
-click(delete): show confirmation to delete current tree
-type(search skill): update result list on the current selection
-click(order by): change order to selected value
-click(skill in list): show skill panel
###Show skill
-click(edit): show edit panel with current skill
-click(access skills): show selected skill

What the user can see:
###Show list
-a list of skill in tree
###Show skill
-the current selected skill information (name, list of requires)
-a list of skills that can be accessed from selected skill

let stateShape = {
  mode: "SHOW_LIST",
  selected_tree: 0,
  sort: 0,
  sort_options: [
    { id: 0, label: "name" },
    { id: 0, label: "depth" },
  ],
  cost: [
    {
      id: "0",
      label: "experience points",
    },
  ],
  skills: [
    {
      name,
      id,
      access_level,
      cost,
      cost_value,
      background_color,
      font_color,
      description,
      antecedents,
      next_skills,
    },
  ],
  selected_skill: -1,
  trees: [
    {
      id: 0,
      name: "Classic skill tree",
      skills: [],
    },
  ],
};

*/

import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";

import { Action, applyMiddleware } from "redux";

import actions from "./actions";
import reducers from "./reducers";
import selectors from "./selectors";
import thunk from "redux-thunk";

export { actions, reducers, selectors };

const previousState = {};

let store = configureStore({
  reducer: reducers,
  preloadedState: previousState,
  middleware: getDefaultMiddleware(),
});

export function getStore() {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
