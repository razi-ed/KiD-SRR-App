import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

class Drawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.open){
      return {open: true}
    } else {
      return {open: false}
    }
  }

  render() {
    const { classes } = this.props;

    return (
        <SwipeableDrawer
          open={this.state.open}
          onClose={this.toggleDrawer("open", false)}
          onOpen={this.toggleDrawer("open", true)}
        >
        </SwipeableDrawer>
    );
  }
}

// SwipeableTemporaryDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SwipeableTemporaryDrawer);
