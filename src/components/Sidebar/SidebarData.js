// Filename - components/Sidebar/SidebarData.js


import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {AppletIcon} from '@workday/canvas-kit-react/icon';
import {compensationIcon} from '@workday/canvas-applet-icons-web';
import announcementLogo from "../../img/wd-applet-announcements.png";
import compensationLogo from "../../img/wd-applet-compensation.png";
import opportunityLogo from "../../img/wd-applet-opportunity-graph.png"
import payrollLogo from "../..//img/wd-applet-payroll-year-end.png";
import financialsLogo from "../../img/wd-applet-financials.png"
import learningLogo from "../../img/wd-applet-learning.png"
import dashboardLogo from "../../img/wd-applet-custom-dashboards-talent-management.png"
const pathArray = ['/', '/pay', '/benefits', '/career', '/absence']

export const SidebarData = [
    {
        title: "Merit",
        path: "/benefits",
        icon: <img style={{height: "32.77px", width: "auto"}} src={compensationLogo}></img>
    },
    {
        title: "Conflict of Interest",
        path: "/",
        icon: <img style={{height: "32.77px", width: "auto"}} src={announcementLogo}></img>
    },
    {
        title: "My Career and Talent @ Altron",
        path: "/career",
        icon: <img style={{height: "32.77px", width: "auto"}} src={opportunityLogo}></img>
    },
    {
        title: "Team Talent and Performance",
        path: "/",
        icon: <img style={{height: "32.77px", width: "auto"}} src={dashboardLogo}></img>
    },
    {
        title: "Learning",
        path: "/",
        icon: <img style={{height: "32.77px", width: "auto"}} src={learningLogo}></img>
    },
    {
        title: "Expenses Hub",
        path: "/pay",
        icon: <img style={{height: "32.77px", width: "auto"}} src={financialsLogo}></img>
    },
    {
        title: "Travel Management",
        path: "/absence",
        icon: <img style={{height: "32.77px", width: "auto"}} src={payrollLogo}></img>
    },
   
];
