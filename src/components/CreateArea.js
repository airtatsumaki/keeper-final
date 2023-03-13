import React, { useState } from "react";

function CreateArea(props) {
  
  const [noteObj, setNoteObj] = useState({title: "", content: ""});
  
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        // console.log(noteObj);
        props.handleAdd(noteObj);
      }}>
        <input 
        onChange={(event) => {
          const newTitle = event.target.value;
          setNoteObj((prev) => {
            return {...prev, title: newTitle}
          });
        }} 
        name="title" 
        placeholder="Title" 
        value={noteObj.title} />
        <textarea 
        onChange={(event) => {
          const newContent = event.target.value;
          setNoteObj((prev) => {
            return {...prev, content: newContent}
          });
        }} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value={noteObj.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
