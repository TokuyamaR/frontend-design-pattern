import React, { useState, useContext } from "react";
import Icon from "./Icon";

const PopupContext = React.createContext();

export function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="popup">
      <PopupContext.Provider value={{ isOpen, setIsOpen }}>
        {props.children}
      </PopupContext.Provider>
    </div>
  );
}

function Toggle() {
  const { isOpen, setIsOpen } = useContext(PopupContext);
  console.log(isOpen);
  return (
    <div className="popup-btn" onClick={() => setIsOpen(!isOpen)}>
      <Icon />
    </div>
  );
}

function List({ children }) {
  const { open } = useContext(PopupContext);
  return open ? <ul className="popup-list">{children}</ul> : <></>;
}

function Item({ children }) {
  return <li className="popup-item">{children}</li>;
}

Popup.Toggle = Toggle;
Popup.List = List;
Popup.Item = Item;
