import React from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import observable from "./index";

function logger(data) {
  console.log(`${Date.now()}:${data}`);
}

function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}

function handleClick() {
  observable.notify("user click button");
}

function handleToggle() {
  observable.notify("user toggle switch");
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div className="App">
      <Button onClick={handleClick}>Click me!</Button>
      <FormControlLabel control={<Switch onChange={handleToggle} />} />
      <ToastContainer />
    </div>
  );
}
