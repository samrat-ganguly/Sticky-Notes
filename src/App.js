import "./App.css";
import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import NoteContainer from "./components/NoteContainer/NoteContainer";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("NOTES")) || []
  );

  //adding a new note
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  //deleting a new note
  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  // check for change
  // if any change occurs then add it to Local Storage

  const updateText = (text, id) => {
    //update text for a particular id , so id is used with text
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
};

export default App;
