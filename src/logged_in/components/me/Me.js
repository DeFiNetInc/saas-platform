import React from "react";
import { List, Paper, withStyles } from "@material-ui/core";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Me(props) {
  

  return (
    <Paper>
      <List disablePadding>
        <div>List item here</div>
      </List>
    </Paper>
  );
}



export default withStyles(styles)(Me);
