import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const header = () => {
  return (
    <div style={{marginBottom:"150px"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Bad Seal Studios - TypeRacer app
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default header;
