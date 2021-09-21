import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


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

  const [isTakingNote, setTakingNote] = useState(false);
  function handleTakingNote(flag) {
    setTakingNote(flag);
  }

  return (
    <div>
      <form className="create-note">
        {isTakingNote && <input 
          name="title" 
          placeholder="Title" 
          value={note.title} 
          onChange={handleChange}
          type="text"
        />}
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          onClick={() => handleTakingNote(true)}
          value={note.content} 
          onChange={handleChange} 
          rows={isTakingNote ? "3" : "1"} 
        />
        <Zoom in={isTakingNote}>
          <Fab 
            onClick={(event) => {
              props.onAdd(note.title, note.content);
              setNote({title: "", content: ""});
              event.preventDefault();
            }}
          ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
