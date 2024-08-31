import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SidebarLabel = styled.span`
    margin-left: 16px;
`;


const SidebarLink = styled.link`
    display: flex;
    color: #000000;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #f8f6f8;
        cursor: pointer;
    }
`


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);


    const showSubnav = () => setSubnav(!subnav);


    return (
        <>
            <SidebarLink
                to={item.path}
                onClick={item.subNav && showSubnav}
                /*style={{marginBottom: "2.9vh"}}*/
            >
                <div class="flex-container">
                    {item.icon}
                    <SidebarLabel style={{fontSize: "14.74px", color: "#5e5c5e"}}>
                        {item.title}
                    </SidebarLabel>
                </div>
            </SidebarLink>
           
        </>
    );
};


export default SubMenu;