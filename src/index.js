import { Fragment } from "react";
import { render } from "react-dom";
import App from "./store/App";

render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById("root")
);