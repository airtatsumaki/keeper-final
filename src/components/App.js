import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes, setNotes] = useState([{title: "Note title", content: "Note content"}]);

  function addNote(noteObj){
    // console.log(noteObj);
    setNotes((prev) => {
      return [...prev, noteObj];
    });
  }

  function deleteNote(noteId){
    console.log(noteId);
    // setNotes(prev => {
    // //   prev.filter((item, index) => index !== noteId);
    //   return [prev.pop(noteId)];
    // });

    // setItems(prevItems => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea handleAdd={addNote}/>
      {notes.map((theNote, index) => {
        return <Note key={index} id={index} title={theNote.title} content={theNote.content} handleDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
