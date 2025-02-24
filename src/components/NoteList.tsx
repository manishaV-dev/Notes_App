import React from "react";
import { NoteObject } from "../models/note";
import {
  Box,
  Button,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material";

interface iNoteProps {
  note: NoteObject;
}

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const Wrapper = styled(Box)`
  & > button {
    border: none;
    background: rgb(222, 66, 79);
    margin-top: 15px;
    color: #fff;
  }
`;

const NoteList: React.FC<iNoteProps> = ({ note }) => {
  return (
    <StyledCard style={{ backgroundColor: note.color }}>
      <CardContent>
        <Wrapper>
          <Typography variant="h5">{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography style={{ marginTop: "15px" }}>{note.date}</Typography>
          <Button variant="outlined">Delete</Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default NoteList;
