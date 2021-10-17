export default function buttonStyles(isActive) {
  return {
    border: "solid 1px deeppink",
    background: isActive ? "deeppink" : "white",
    color: isActive ? "white" : "deeppink",
    padding: ".5em 2em",
    margin: ".5em"
  };
}
