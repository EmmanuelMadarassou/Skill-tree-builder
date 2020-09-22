import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";
import { RootState } from "..";

/**
 * --- Types ----
 */

export interface Resource {
  label: string;
  id: number;
  icon: string;
}

export interface ResourceSlice extends EntityState<Resource> {
  selected_resource: number;
}

/**
 * --- Reducer ----
 */

const resourceAdapter = createEntityAdapter<Resource>({});

const initialState: ResourceSlice = resourceAdapter.getInitialState({
  selected_resource: -1,
});

const resourceSlice = createSlice({
  name: "resource",
  initialState: initialState,
  reducers: {
    addResource: resourceAdapter.addOne,
    removeResource: resourceAdapter.removeOne,
    updateResource: resourceAdapter.updateOne,
    selectResource: select_resource,
  },
});

export const resourceActions = resourceSlice.actions;
export const resourceSelectors = resourceAdapter.getSelectors(
  (state: RootState) => state.resource
);
export default resourceSlice.reducer;

/**
 * --- Pure actions----
 */

function select_resource(
  state: ResourceSlice,
  action: PayloadAction<{ id: number }>
) {
  const { id } = action.payload;
  state.selected_resource = id;
}

/**
 * --- Thunk actions ----
 */
