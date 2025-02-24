import { Toolbar, AppBar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography>NOTES</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
