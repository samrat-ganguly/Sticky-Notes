import React from "react";

import Note from "../Note/Note";

import "./NoteContainer.css";

const NoteContainer = (props) => {
  // to reverse the notes order
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  };

  // storing the reversed notes in a variable notes
  const notes = reverseArray(props.notes);
  return (
    <div className="noteContainer">
      <h2>Notes</h2>
      <div className="noteContainer_notes custom-scroll">
        {/* mapping only the notes variable */}
        {notes.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes Present !</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
