import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea handleAdd={(noteObj) => {
        setNotes((prev) => [...prev, noteObj]);
      }}/>
      {notes.map((theNote, index) => {
        return <Note 
        key={index} 
        id={index} 
        title={theNote.title} 
        content={theNote.content} 
        handleDelete={(id) => {
          setNotes(prevItems => prevItems.filter((item, index) => index !== id));
        }} />
      })}
      <Footer />
    </div>
  );
}

export default App;
