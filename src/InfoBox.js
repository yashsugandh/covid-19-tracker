import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infobox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        <Typography className="infobox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
