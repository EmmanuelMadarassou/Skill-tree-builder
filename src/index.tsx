import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";

import { getStore, actions } from "./redux";

const store = getStore();

console.log("Initial state:", store.getState());

const divine = {
  label: "Divine Blessing",
  id: 0,
  mastery: 0,
  parent_skill: -1,
  access_level: 12,
  cost: "Experience",
  cost_value: 150,
  background_color: [255, 255, 255],
  font_color: [0, 0, 0],
  description: "You can purify dzazdsmall object like water or figurines.",
  required_skills: [],
  next_skills: [],
};
const fireBall = {
  label: "Fire Ball",
  id: 1,
  mastery: 0,
  parent_skill: -1,
  access_level: 8,
  cost: "Experience",
  cost_value: 50,
  background_color: [255, 255, 255],
  font_color: [0, 0, 0],
  description: "You can throw fire balls from your hands.",
  required_skills: [],
  next_skills: [],
};

store.dispatch(actions.skill.addSkill(divine));
store.dispatch(actions.skill.addSkill(fireBall));

//store.dispatch(actions.skill.removeSkill(0));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
