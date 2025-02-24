import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import NoteList from "./NoteList";

interface INoteProps {
  notes: NoteObject[];
  deleteNote: (id: string) => void;
}

const Notes: React.FC<INoteProps> = ({ notes = [], deleteNote }) => {
  return (
    <Box>
      <Typography variant="h4">Notes</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <NoteList note={note} key={note.id} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
