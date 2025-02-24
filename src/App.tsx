import { Box } from "@mui/material";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { useState } from "react";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  const addNotes = (note: NoteObject) => {
    const updatedNotes = [note, ...notes];
    setNotes(updatedNotes);
  };

  const deleteNote = (id: string) => {
    const updatedNote = notes.filter((note) => note.id !== id);
    setNotes(updatedNote);
  };

  return (
    <>
      <Header />
      <Box style={{ padding: "20px" }}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </>
  );
}

export default App;
