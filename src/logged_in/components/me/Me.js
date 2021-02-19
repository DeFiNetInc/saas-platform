import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { List, Paper, withStyles } from "@material-ui/core";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Me(props) {
  const {    
    classes,    
  } = props;
  

  return (
    <Paper>
      <List disablePadding>
        <div>List item here</div>
      </List>
    </Paper>
  );
}

Me.propTypes = {
  classes: PropTypes.object.isRequired  
};

export default withStyles(styles)(Me);
