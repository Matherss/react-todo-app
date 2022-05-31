import React, { useState } from "react";
import Badge from "../Badge";
import List from "../List/List";
import "./AddButtonList.scss";
import closeSvg from "../../assets/img/close.svg";

const AddButtonList = ({ colors }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedColor, setColor] = useState(null);
  return (
    <div className="add-list">
      <List
        onClick={() => setShowPopup(!showPopup)}
        items={[
          {
            className: "list__add-button",
            id: 0,
            icon: (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            name: "Add folder"
          }
        ]}
      />
      {showPopup && (
        <div className="add-list__popup">
          <input type="text" autoFocus placeholder="Folder name" />
          <img
            onClick={() => setShowPopup(false)}
            src={closeSvg}
            alt="close button"
            className="add-list__popup-close-btn"
          />
          <div className="add-list__popup-colors">
            <ul>
              {colors.map((c) => (
                <Badge
                  onClick={() => setColor(c.id)}
                  key={c.id}
                  color={c.name}
                  className={selectedColor === c.id && "active"}
                />
              ))}
            </ul>
          </div>
          <button>Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
