import React from "react";
import { ToastContainer, toast } from "react-toastify";

function logger(data) {
  console.log(`${Date.now()}:${data}`);
}

function toastify(data) {
  toast(data);
}

export default function App() {
  return (
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch />} />
      <ToastContainer />
    </div>
  );
}
