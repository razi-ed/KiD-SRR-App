import React from "react";
import { Card, Typography, IconButton, Avatar } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

const DataList = props => {
  let { data, onCall } = props;
  return data.map((e, i) => {
    return (
      <Card key={i}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
          key={(i + 1) * (i + 1)}
        >
          <Avatar>{e.bloodGroup}</Avatar>
          <Typography variant="subheading">{e.name}</Typography>
          <Typography variant="subheading">{e.address}</Typography>
          <IconButton
            color="primary"
            aria-label="Call"
            onClick={x => {
              x.preventDefault();
              onCall(e); ///////del fnnnnnnn
            }}
          >
            <CallIcon />
          </IconButton>
        </div>
      </Card>
    );
  });
};

export default DataList;
