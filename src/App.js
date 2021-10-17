import "./styles.css";
import React, { useReducer } from "react";
import { viewReducer } from "./reducers/view-reducer";
import View from "./components/view/view";
import { VIEWTYPE } from "./types/view-types";

export const ViewContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(viewReducer, {
    activeView: VIEWTYPE.VIEW1
  });

  return (
    <ViewContext.Provider value={{ viewState: state, viewDispatch: dispatch }}>
      <div className="App">
        <View imageUrl={state.imageUrl} />
      </div>
    </ViewContext.Provider>
  );
}
