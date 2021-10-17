import React from 'react';
import SidebarOptions from "./SidebarOptions";
import "../css/Sidebar.css";
import {Button} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="twitter-logo"/>
            <SidebarOptions className="sidebar-options" />
            <Button className="sidebar-tweet-button" variant="outlined" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;