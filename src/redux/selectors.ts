import { skillSelectors } from "./ducks/skill";
import { resourceSelectors } from "./ducks/resource";
import { uiSelectors } from "./ducks/ui";
import { treeSelectors } from "./ducks/tree";

export default {
  skill: skillSelectors,
  resource: resourceSelectors,
  ui: uiSelectors,
  tree: treeSelectors,
};
