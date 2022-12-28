import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  gradientButton: {
    background: "linear-gradient(45deg, #381060 30%, #5d2b90 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  gradientText: {
    background: 'linear-gradient(45deg, #381060 50%, #5d2b90 50%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    paddingTop: '2vh',
  },
}));


export default function CharacterDetailsCard(props) {
  const classes = useStyles();
  return (
    <Box sx={{ m:3 }}>
    <div
      className="character-details-card flex"
      aria-labelledby="character-name"
      tabIndex={-1}
    >
      <h2 className={classes.gradientText} id="character-name">
        {props.name}
      </h2>
      <div className="character-card bg-transparent details" tabIndex={0}>
        <img src={props.image} alt={props.name} />
        <div className="character-description card-details flex">
          <p>{`Status: ${props.status}`}</p>
          <p>{`Species: ${props.species}`}</p>
          <h3 className="card-heading fw-700">Last known location</h3>
          <p>{props.location.name}</p>
          <h3 className="card-heading fw-700">First seen in</h3>
          <p>
            {props.episode[0].episode} {props.episode[0].name}
          </p>
        </div>
      </div>
      <Box sx={{ m:5 }}>
        <Link to={`/characters`}>
          <button className={classes.gradientButton}>Back Home</button>
        </Link>
      </Box>
    </div>
    </Box>
  );
}
