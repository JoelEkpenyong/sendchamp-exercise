import React from "react";
import { useRecoilState } from "recoil";
import { togglerState } from "../../recoil/toggle/atom";
import "./index.css";

const Toggle = ({ ...props }) => {
  const [on, setOn] = useRecoilState(togglerState);

  const btnClassName = ["toggle-btn", on ? "toggle-btn-on" : "toggle-btn-off"]
    .filter(Boolean)
    .join(" ");

  const toggle = () => {
    setOn(!on);
  };

  return (
    <label aria-label={"ariaLabel" || "Toggle"} style={{ display: "block" }}>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={() => null}
        onClick={toggle}
        data-testid="toggle-input"
      />
      <span className={btnClassName} {...props} />
    </label>
  );
};

export default Toggle;
