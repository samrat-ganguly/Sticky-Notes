import React, { useState } from "react";

import addIcon from "../../images/add_icon.png";

import "./Sidebar.css";

const Sidebar = (props) => {
  const [listOpen, setListOpen] = useState(false); // toggle the add button
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      {/* toggle the add button */}
      <img src={addIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {/* toggle the add button */}

        {colors.map((item, index) => {
          return (
            <li
              key={index}
              className="sidebar_list_item"
              style={{ backgroundColor: item }}
              onClick={() => props.addNote(item)}
              // to trigger when adding a note
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
