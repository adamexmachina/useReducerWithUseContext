import { useContext, useEffect } from "react";
import { ViewContext } from "../../App";
import ToggleButtons from "../toggle-buttons/toggle-buttons";
import getButtons from "../../components/toggle-buttons/getButtons";
import { VIEWTYPE } from "../../types/view-types";
import { ACTIONTYPE } from "../../types/action-types";

export default function View() {
  const { viewState, viewDispatch } = useContext(ViewContext);

  useEffect(() => {
    const breed =
      viewState.activeView === VIEWTYPE.VIEW1
        ? VIEWTYPE.NAME1.toLowerCase()
        : VIEWTYPE.NAME2.toLowerCase();

    const fetchDogs = async () => {
      viewDispatch({
        type: ACTIONTYPE.ISLOADING,
        payload: { isLoading: true }
      });

      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );

      const json = await response.json();

      viewDispatch({
        type: ACTIONTYPE.UPDATEIMAGEURL,
        payload: { imageUrl: json.message }
      });

      viewDispatch({
        type: ACTIONTYPE.ISLOADING,
        payload: { isLoading: false }
      });
    };

    fetchDogs();
  }, [viewState.activeView, viewDispatch]);

  const onToggleClick = ({ target }) => {
    switch (target.value) {
      case VIEWTYPE.VIEW1:
        viewDispatch({
          type: ACTIONTYPE.SETACTIVEVIEW,
          payload: { activeView: VIEWTYPE.VIEW1 }
        });
        break;
      case VIEWTYPE.VIEW2:
        viewDispatch({
          type: ACTIONTYPE.SETACTIVEVIEW,
          payload: { activeView: VIEWTYPE.VIEW2 }
        });
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div>
        <ToggleButtons
          onToggleClick={onToggleClick}
          activeView={viewState.activeView}
          buttons={getButtons()}
        />
      </div>
      <div>
        <img src={viewState.imageUrl} />
      </div>
    </>
  );
}
