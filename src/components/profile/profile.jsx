import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from "@material-ui/core";
import "./profile.css";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


const Profile = (props) => {

  const classes = useStyles();

  const avtrImg = "https://www.pepcoding.com/data/team/photo/sushant_beriwal.jpg";
  return (
    <div className="profile">
      <div className="profile__data">
        <Avatar alt="Sushant Beriwal" src={avtrImg} className={classes.large} />
        <div className="profile__name">
            <strong>sushberiwal</strong>
            <p>Sushant Beriwal</p>
        </div>
      </div>
      <div className="profile__suggestions">
          <h4 style={{color:"gray"}}>Suggestions for you</h4>

      </div>
    </div>
  );
};

export default Profile;
