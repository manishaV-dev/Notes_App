import { Toolbar, AppBar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      <AppBar color="transparent">
        <Toolbar>
          <Typography>NOTES</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
