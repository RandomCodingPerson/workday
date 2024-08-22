// Filename - components/Sidebar/Sidebar.js


import React, { useState } from "react";
import styled from "styled-components";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {plusCircleIcon, textEditIcon, searchIcon, clipboardIcon} from '@workday/canvas-system-icons-web';
import { IconContext } from "react-icons/lib";
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import { SearchbarData } from "./SearchbarData";
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
    const history = useHistory()
    const [searchResults, setSearchResults] = useState([]);
    const showSearchbar = () => setSearchbar(!searchbar);
    var searchRes = []
    const searchTasks = () => {
      let query = document.getElementById("searchInput").value.toLowerCase()
      let input = document.getElementById("results")
      let tasks = document.getElementById('tasks');
      let styles = input.style
      searchRes = []; 
      if (query) {
        //used in the inclusion metrics to determine whether strings container within the prompt should be included
        let shortChecker = query.substring(0, query.length - 1)
        SearchbarData.map((item) => {
          if(item.title.toLowerCase().includes(query) && !shortChecker.includes(item.title.toLowerCase())) {
            searchRes.push(item);
          } 
        })
        if (searchRes.length>7) searchRes.length=7
        setSearchResults(searchRes);
        if ((styles.boxShadow == "revert" || !styles.boxShadow) && searchRes.length) {
          styles.boxShadow = "-3px 4px 2px whitesmoke, 3px 4px 2px whitesmoke";
          tasks.style.marginTop="2vh";
          tasks.style.marginBottom= "2vh";
        }
        if (searchRes.length == 0) {
          styles.boxShadow = "revert";
          tasks.style.marginTop = "0px";
          tasks.style.marginBottom = "0px";
        }
      } else {
        setSearchResults([])
        styles.boxShadow = "revert";
        tasks.style.marginTop = "0px";
        tasks.style.marginBottom = "0px";
      }
      
    }

    return (
        <div class="searchContainer" id="searchContainer">
            <div id="results">
              <div className={classes.search} id="searchBar">
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
              <div id="tasks">
                  {searchResults.map(function(searchResult, key) {
                    return <div class="task" key={key} onClick={() => {window.location.href = searchResult.path}}>
                      <SystemIcon size={"3.5vh"} icon={clipboardIcon} />
                        <div class="task-text">
                          <p style={{fontSize: "15px"}}>{searchResult.title}</p>
                          <p style={{fontSize: "14px", color: "gray"}}>{searchResult.type}</p>
                        </div>
                    </div>
                  })}
              </div>
            </div>
            <div></div>
        </div>
    );
};


export default Searchbar;