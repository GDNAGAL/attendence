import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onhide} className={classes.backdrop}></div>;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onhide={props.onhide} />, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
