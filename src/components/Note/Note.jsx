import { format } from "date-fns";
import React from "react";

import deleteIcon from "../../images/delete_icon.png";

import "./Note.css";

let timer = 500,
  timeout;

const Note = ({ note, updateText, deleteNote }) => {
  const formatDate = (value) => {
    if (!value) return "";

    let date = new Date(value); // formatted frm of received value

    let hr = date.getHours();
    let amPm = hr > 12 ? "PM" : "AM";
    hr = hr ? hr : "12";
    hr = hr > 12 ? 24 - hr : hr;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    let year = date.getFullYear();

    return `${hr}:${min} ${amPm} , ${day}-${month}-${year}`;
  };

  //Debouncing
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  //update text for a particular id , so id is used with text
  const UpdateText = (text, id) => {
    debounce(() => updateText(text, id));
  };
  console.log(note.time);
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(event) => UpdateText(event.target.value, note.id)}
      />
      <div className="note_footer">
        <p>{format(new Date(note.time), "do MM, yyyy 	hh:mm")}</p>
        <img
          src={deleteIcon}
          alt="Delete"
          onClick={() => deleteNote(note.id)}
        />
        {/* To trigger when deleting a note */}
      </div>
    </div>
  );
};

export default Note;
