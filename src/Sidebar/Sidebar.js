/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
// eslint-disable-next-line no-unused-vars
import HomeIcon  from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentityRounded";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';
const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://twitter.com" target="_blank"><SidebarOption active  Icon={TwitterIcon}  text="Twittet"/></a>
            <SidebarOption active  Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon}text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon}text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon}text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon}text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            <Button variant="outlined" className="sidebarTweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;
