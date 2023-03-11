import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import AddIcon from "@mui/icons-material/Add";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaidIcon from "@mui/icons-material/Paid";
import CollectionsIcon from "@mui/icons-material/Collections";
import PhoneIcon from "@mui/icons-material/Phone";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import InfoIcon from "@mui/icons-material/Info";
import ViewListIcon from "@mui/icons-material/ViewList";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ERP College</span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">DASHBOARD</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">ANNOUNCEMENT</p>
          <li>
            <CampaignIcon className="icon" />
            <span>Announcements</span>
          </li>
          <li>
            <AddIcon className="icon" />
            <span>Make Announcements</span>
          </li>
          <p className="title">COURSES</p>
          <li>
            <ImportContactsIcon className="icon" />
            <span>Courses</span>
          </li>

          <li>
            <AddIcon className="icon" />
            <span>Add Course</span>
          </li>

          <li>
            <PaidIcon className="icon" />
            <span>Fee Structure</span>
          </li>

          <li>
            <AddIcon className="icon" />
            <span>Create Admin</span>
          </li>

          <p className="title">MISCELLANOUS</p>
          <li>
            <CollectionsIcon className="icon" />
            <span>Gallery</span>
          </li>
          <li>
            <PhoneIcon className="icon" />
            <span>Contact Us</span>
          </li>
          <li>
            <StickyNote2Icon className="icon" />
            <span>Prospectus</span>
          </li>
          <li>
            <InfoIcon className="icon" />
            <span>Abouts Us</span>
          </li>
          <li>
            <ViewListIcon className="icon" />
            <span>Admission Forms</span>
          </li>
          <p className="title"> LOG OUT</p>
          <li>
            <LogoutIcon className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
