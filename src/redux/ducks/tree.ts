import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";
import { Skill } from "./skill";
import { RootState } from "..";

/**
 * --- Slice Types ----
 */

export interface Tree {
  label: string;
  id: number;
  skill: number[];
}

export interface TreeSlice extends EntityState<Tree> {
  selected_tree: number;
}

/**
 * --- Slice reducer ----
 */

const treeAdapter = createEntityAdapter<Tree>({});

const initialState: TreeSlice = treeAdapter.getInitialState({
  selected_tree: -1,
});

const treeSlice = createSlice({
  name: "tree",
  initialState: initialState,
  reducers: {
    addTree: treeAdapter.addOne,
    removeTree: treeAdapter.removeOne,
    updateTree: treeAdapter.updateOne,
    selectTree: select_tree,
  },
});

export const treeActions = treeSlice.actions;
export const treeSelectors = treeAdapter.getSelectors(
  (state: RootState) => state.tree
);
export default treeSlice.reducer;

/**
 * --- Pure actions----
 */

function select_tree(state: TreeSlice, action: PayloadAction<{ id: number }>) {
  const { id } = action.payload;
  state.selected_tree = id;
}

/**
 * --- Thunk actions ----
 */
