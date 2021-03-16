import React, { useState } from "react";


function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  function handleChange(event) {
      const {name, value} = event.target;
      setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
      });
  }

  return (
    <div>
      <form className="create-note">
        <input 
          name="title" 
          placeholder="Title" 
          value={note.title} 
          onChange={handleChange}
          type="text"
        />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          value={note.content} 
          onChange={handleChange} 
          rows="3" 
        />
        <button 
          onClick={(event) => {
            props.onAdd(note.title, note.content);
            setNote({title: "", content: ""});
            event.preventDefault();
          }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
