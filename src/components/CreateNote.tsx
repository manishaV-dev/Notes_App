import { Box, Button, InputBase, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { NoteObject } from "../models/note";
import { v4 as uuid } from "uuid";
import { TITLE_LIMIT, DETAILS_LIMIT } from "../constants/constant";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }

  & > div > input[type="text"] {
    border-bottom: 1px solid #fff;
    width: 300px;
    color: #f2f2f2;
    padding-right: 25px;
  }

  & > div > input[type="color"] {
    width: 40px;
    hight: 40px;
    position: relative;
    bottom: -10px;
  }

  & > span {
    font-size: 12px;
    position: relative;
    right: 40px;
  }
`;

const Error = styled(Typography)`
  color: red;
`;

interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

const defaultNote = {
  id: "0",
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultNote);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }

    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const onCreateNote = () => {
    if (!note.title && !note.details) {
      setError("All Fields are mandatory");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultNote);
  };

  return (
    <>
      <Container>
        <InputBase
          placeholder="Title"
          value={note.title}
          onChange={(e) => onValueChange(e)}
          name="title"
          inputProps={{
            maxLength: TITLE_LIMIT,
          }}
        />
        <Box component="span">
          {note.title.length}/{TITLE_LIMIT}
        </Box>

        <InputBase
          placeholder="Details"
          onChange={(e) => onValueChange(e)}
          name="details"
          value={note.details}
          inputProps={{
            maxLength: DETAILS_LIMIT,
          }}
        />
        <Box component="span">
          {note.details.length}/{DETAILS_LIMIT}
        </Box>

        <InputBase
          type="color"
          placeholder="Choose Color"
          defaultValue={"#f5f5f5"}
          onChange={(e) => onValueChange(e)}
          name="color"
        />
        <Button variant="outlined" onClick={onCreateNote}>
          Create
        </Button>

        {error && <Error> {error} </Error>}
      </Container>
    </>
  );
};

export default CreateNote;
