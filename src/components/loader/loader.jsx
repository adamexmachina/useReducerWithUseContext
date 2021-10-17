import { useContext } from "react";
import { ViewContext } from "../../App";

const loadingStyles = () => {
  return {
    display: "block",
    background: "white",
    padding: "2em",
    position: "absolute",
    zIndex: "1",
    top: "0",
    left: "0"
  };
};
export default function Loader() {
  const { viewState } = useContext(ViewContext);

  return (
    <div>
      {viewState.isLoading && <p style={loadingStyles()}>Loading...</p>}
    </div>
  );
}
