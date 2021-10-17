import buttonStyles from "./buttonStyles";
import { ViewContext } from "../../App";
import { useContext } from "react";
import Loader from "../loader/loader";

export default function ToggleButtons({ buttons, onToggleClick }) {
  const { viewState } = useContext(ViewContext);

  return (
    <>
      <Loader />
      {buttons.map((button) => {
        return (
          <button
            onClick={onToggleClick}
            value={button.value}
            key={button.value}
            style={buttonStyles(button.value === viewState.activeView)}
          >
            {button.name}
          </button>
        );
      })}
    </>
  );
}
