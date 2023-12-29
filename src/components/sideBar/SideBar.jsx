import React from "react";
import { FaHome, FaCode, FaDatabase, FaCog, FaFileCode } from "react-icons/fa";
import "./SideBar.css";
import { Tooltips } from "../index";

const Sidebar = () => {
  const iconsList = [FaHome, FaCode, FaDatabase, FaCog, FaFileCode];
  iconsList.map((icon) => console.log(icon));

  return (
    <div>
      <div className="sidebar">
        {iconsList.map((Icon, index) => (
          <>
            <div id={index} className="sidebar-item">
              {/* <Icon className="sidebar-icon" /> */}
              <Tooltips Icon={Icon} clase="sidebar-icon" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
