import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@material-ui/core/IconButton";
import tinder from "./assets/tinder.png";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="medium" className="header__icon" />
      </IconButton>
      <img className="header__logo" src={tinder} alt="" />
      <IconButton>
        <ForumIcon fontSize="medium" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
