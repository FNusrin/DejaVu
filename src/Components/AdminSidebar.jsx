import { ProSidebarProvider, SubMenu } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { ReceiptOutlined } from "@mui/icons-material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookIcon from '@mui/icons-material/Book';
import React from "react";
function AdminSidebar() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div id="sidebar" style={{ position: "absolute" }}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          ></MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<ReceiptOutlined />}>About</MenuItem>
          <SubMenu label="Stories" icon={<LibraryBooksIcon />}>
          <MenuItem icon={<BookIcon />}>Featured Stories</MenuItem>
          <MenuItem icon={<LibraryAddIcon />}>Latest Stories</MenuItem>
          </SubMenu>
          <MenuItem icon={<AccountCircleIcon />}>Profile</MenuItem>
          <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default AdminSidebar;
