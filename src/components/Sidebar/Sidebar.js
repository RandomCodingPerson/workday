// Filename - components/Sidebar/Sidebar.js


import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {plusCircleIcon, textEditIcon} from '@workday/canvas-system-icons-web';
import { IconContext } from "react-icons/lib";
import './Sidebar.css'


const Nav = styled.div`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


const SidebarNav = styled.nav`
    background: #fff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;


const SidebarWrap = styled.div`
    width: 100%;
`;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);


    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <IconContext.Provider value={{ color: "#000000"}}>
                <Nav style={{marginLeft:"0px", height: "30px"}}>
                    <NavIcon to="#" style={{marginLeft:"0px"}}>
                        <FaIcons.FaBars
                            onClick={showSidebar}
                            style={{marginLeft:"0px", height: "21px"}}
                        />
                    </NavIcon>
                <p1>MENU</p1>
                </Nav>
                <SidebarNav sidebar={sidebar} style={{width: "27.6vw"}}>
                    <SidebarWrap>
                        <div class="flex-container" style={{marginTop: "3.58vh", marginBottom: "6.05vh"}}>
                            <div class="menu-text"><p>Menu</p></div>
                            <div>
                                <NavIcon to="#" style={{height: "10px"}}>
                                    <AiIcons.AiOutlineClose
                                        onClick={showSidebar}
                                        style={{marginRight: "1.89vw", marginLeft: "auto", fontSize: "large"}}
                                    />
                                </NavIcon>
                            </div>
                        </div>
                        <div class="flex-container" style={{marginLeft: "1.33vw", fontSize: "15px"}}>
                            <div class="vflex-container">
                                <p style={{color: "#4967ae"}}>Apps</p>
                                <div class="trapezoid"/>
                            </div>
                            <div class="vflex-container" style={{marginRight: "15.22vw"}}>
                                <p style={{color: "gray"}}>Shortcuts</p>
                                <div class="trapezoid" style={{background: "white"}}></div>
                            </div>
                        </div>
                        <hr style={{height: "1px", color: "gray"}}></hr>
                        <div style={{marginLeft: "1.11vw", marginTop: "4.48vh", marginBottom: "4.8vh"}}>
                            <p style={{color: "#9e9fa2", fontSize: "13px"}}>Your Saved Order</p>
                        </div>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                        <div style={{position:"absolute", background: "#f5f3f5", bottom:"1.68vh", width: "-webkit-fill-available"}}>
                            <div style={{height: "2px", backgroundColor: "#f5f3f5"}}></div>
                            <div class="flex-container" style={{marginLeft: "4.77vw", fontSize: "14px", marginTop: "3.15vh"}}>
                                <div class="app-mod" style={{width: "9.72vw", height: "5.94vh", borderRadius: "100vw", borderStyle: "solid", borderWidth: "2px"}}>
                                    <SystemIcon icon={plusCircleIcon} color='#4a5561'/>
                                    <p style={{color: "#4f4e4f", marginLeft: "0.67vw"}}>Add Apps</p>
                                </div>
                                <div class="app-mod" style={{marginRight: "5.06vw", width: "6.94vw", height: "5.94vh", borderRadius: "100vw", borderStyle: "solid", borderWidth: "2px"}}>
                                    <SystemIcon icon={textEditIcon} color='#4a5561'/>
                                    <p style={{color: "#4f4e4f", marginLeft: "0.67vw"}}>Edit</p>
                                </div>
                            </div>
                        </div>
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};


export default Sidebar;