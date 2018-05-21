import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WebIcon from "@material-ui/icons/Web";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import SvgIcon from "@material-ui/core/SvgIcon";

export const mailFolderListItems = (
  <div>
    <ListItem button>
      {/* <ListItemIcon>
        <WebIcon />
      </ListItemIcon> */}
      <ListItemText primary="News" />
    </ListItem>
    <ListItem button>
      {/* <ListItemIcon>
        <BloodIcon />
      </ListItemIcon> */}
      <ListItemText primary="Blood" />
    </ListItem>
    <ListItem button>
      {/* <ListItemIcon>
        <SendIcon />
      </ListItemIcon> */}
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      {/* <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon> */}
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      {/* <ListItemIcon>
        <MailIcon />
      </ListItemIcon> */}
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      {/* <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon> */}
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      {/* <ListItemIcon>
        <ReportIcon />
      </ListItemIcon> */}
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);

