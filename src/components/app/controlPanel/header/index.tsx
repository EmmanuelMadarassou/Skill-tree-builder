import * as React from "react";
import { selectors, actions } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";

interface HeaderProps {
  mode: string;
}

function Header(props: HeaderProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(actions.ui.showHome())}>
          <i className="fa fa-home"></i>
        </button>
      </div>
      <h1>{props.mode}</h1>
    </div>
  );
}

export default Header;
