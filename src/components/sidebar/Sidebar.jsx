import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import AddIcon from "@mui/icons-material/Add";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaidIcon from "@mui/icons-material/Paid";
import CollectionsIcon from "@mui/icons-material/Collections";
import PhoneIcon from "@mui/icons-material/Phone";
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
          <li>
            <DashboardIcon className="icon" />
            <span>
              <Link>Dashboard</Link>
            </span>
          </li>
          <li>
            <CampaignIcon className="icon" />
            <span>
              <Link>Announcements</Link>
            </span>
          </li>
          <li>
            <AddIcon className="icon" />
            <span>
              <Link>Make Announcements</Link>
            </span>
          </li>
          <li>
            <ImportContactsIcon className="icon" />
            <span>
              <Link>Courses</Link>
            </span>
          </li>

          <PaidIcon className="icon" />
          <span>
            <Link>Fee Structure</Link>
          </span>

          <li>
            <AddIcon className="icon" />
            <span>
              <Link>Create Admin</Link>
            </span>
          </li>
          <li>
            <AddIcon className="icon" />
            <span>
              <Link>Add Course</Link>
            </span>
          </li>
          <li>
            <CollectionsIcon />
            <span>
              <Link>Gallery</Link>
            </span>
          </li>
          <li>
            <PhoneIcon />
            <span>
              <Link>Contact Us</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Prospectus</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Abouts Us</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Admission Forms</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Log Out</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
