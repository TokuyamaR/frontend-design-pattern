import React from "react";
import "./style.css";
import { Popup } from "./Popup";

export default function PopupMenu() {
  return (
    <Popup>
      <Popup.Toggle />
      <Popup.List>
        <Popup.Item>Edit</Popup.Item>
        <Popup.Item>Delete</Popup.Item>
      </Popup.List>
    </Popup>
  );
}
