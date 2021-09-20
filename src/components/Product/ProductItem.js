import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#2596be",
    flex: 1,
    marginRight: 4,
    marginTop: 20,
    height: 300,
  },
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    Fcolor: "white",
  },
  pos: {
    marginBottom: 12,
    color: "white",
  },
});

export const ProductItem = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {data.title}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {data.description}
        </Typography>
        <Typography variant="body1" component="p">
          Ingredient
          <br />
          {data.category}
        </Typography>
      </CardContent>
    </Card>
  );
};
