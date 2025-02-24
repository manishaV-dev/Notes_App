import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import NoteList from "./NoteList";

interface INoteProps {
  notes: NoteObject[];
}

const Notes: React.FC<INoteProps> = ({ notes }) => {
  return (
    <Box>
      <Typography variant="h4">Notes</Typography>
      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        {notes.map(note => (
          <NoteList note={note} key={note.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
