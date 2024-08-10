// Filename - components/Sidebar/Sidebar.js


import React, { useState } from "react";
import styled from "styled-components";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SearchbarData } from "./SearchbarData";
import SubMenu from "./SubMenu";
import {plusCircleIcon, textEditIcon, searchIcon} from '@workday/canvas-system-icons-web';
import { IconContext } from "react-icons/lib";
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import InputBase from '@material-ui/core/InputBase';
import './Searchbar.css'
const useStyles = makeStyles((theme) => ({
    search: {
        '&:hover': {
            borderColor: "#62749a !important"
        },
        position: 'relative',
        display: "flex", 
        width: "36.8vw", 
        height: "6vh", 
        backgroundColor: "#f0f1f5", 
        borderRadius: "100vw", 
        borderColor: "#ebebeb", 
        borderStyle: "solid", 
        borderWidth: "2px"
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}))

const Searchbar = () => {
    const classes = useStyles();
    const [searchbar, setSearchbar] = useState(false);
    const [toggled, setToggled] = useState(false);

    const showSearchbar = () => setSearchbar(!searchbar);

    const searchTasks = () => {
      let input = document.getElementById("results")
      let query = document.getElementById("searchInput").value
      console.log('input', query.value)
      input.style.height = "50vh"
      input.style.backgroundColor = "white"
      input.style.borderRadius = "10%";
      input.style.borderWidth = "10px";
      input.style.borderColor = "#ebebeb";
    }

    return (
        <div class="searchContainer" id="searchContainer">
            <div id="results">
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                  <SystemIcon size={"3vh"} icon={searchIcon} />
                  </div>
                  <InputBase
                  placeholder="Search"
                  style={{fontSize: "15px", width: "40vw"}}
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  id="searchInput"
                  onChange={searchTasks}
                  inputProps={{ 'aria-label': 'search' }}

                  />
              </div>
            </div>
            <div></div>
        </div>
    );
};


export default Searchbar;