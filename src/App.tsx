import { Box } from "@mui/material";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Header />
      <Box style={{ padding: "20px" }}>
        <CreateNote />
        <Notes />
      </Box>
    </>
  );
}

export default App;
