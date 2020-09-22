import { combineReducers } from "redux";
import skillReducer from "./ducks/skill";
import uiReducer from "./ducks/ui";
import ResourceReducer from "./ducks/resource";
import treeReducer from "./ducks/tree";

export default combineReducers({
  skill: skillReducer,
  ui: uiReducer,
  resource: ResourceReducer,
  tree: treeReducer,
});
