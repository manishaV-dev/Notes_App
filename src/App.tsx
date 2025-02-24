import { Box } from "@mui/material";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem("notes", JSON.stringify({ note, ...notes }));
  };

  const deleteNote = (id: string) => {
    const updatedNote = notes.filter((note) => note.id !== id);
    setNotes(updatedNote);
    sessionStorage.setItem("notes", JSON.stringify(updatedNote));
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
