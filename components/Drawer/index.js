import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { mailFolderListItems, otherMailFolderListItems } from "../DrawerItems";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    open: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.openDrawer !== prevState.open) {
      if (nextProps.openDrawer === true) {
        return {
          open: true,
        };
      } else if (nextProps.openDrawer === false) {
        return {
          open: false,
        };
      }
    } else {
      return null;
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
    if (open === false) {
      this.props.toggleOpenDrawer(false);
    }
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.state.open}
          onClose={this.toggleDrawer("open", false)}
          onOpen={this.toggleDrawer("open", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("open", false)}
            onKeyDown={this.toggleDrawer("open", false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
