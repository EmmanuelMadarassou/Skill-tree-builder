import { skillActions } from "./ducks/skill";
import { uiActions } from "./ducks/ui";
import { resourceActions } from "./ducks/resource";
import { treeActions } from "./ducks/tree";

export default {
  skill: skillActions,
  ui: uiActions,
  resource: resourceActions,
  tree: treeActions,
};
