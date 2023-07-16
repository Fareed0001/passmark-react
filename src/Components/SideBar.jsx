import React from "react";
import { BiChalkboard, BiClipboard } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="sidebar-components">
      <a className="sidebar-link-tag" href="dashboard.html">
        <div className="nav-item">
          <p className="nav-link-text">
            <BiClipboard className="sidebar-icons " /> <span>Dashboard</span>
          </p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="#">
        <div className="nav-item className-nav-item">
          <p className="nav-link-text">
            <BiChalkboard className="sidebar-icons " />
            My className
          </p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-instructor.html">
        <div className="nav-item">
          <p className="nav-link-text">
            <i className="fa-solid sidebar-icons fa-person-chalkboard"></i>
            Instructors
          </p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-courses.html">
        <div className="nav-item">
          <p className="nav-link-text">
            <i className="fa-solid sidebar-icons fa-book"></i> Courses
          </p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="">
        <div className="nav-item">
          <p className="nav-link-text">
            <i className="fa-solid sidebar-icons fa-comment fa-flip-horizontal"></i>
            Message
          </p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-profile.html">
        <div className="nav-item">
          <p className="nav-link-text">
            <i className="fa-solid sidebar-icons fa-user"></i> Profile
          </p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-settings.html">
        <div className="nav-item">
          <p className="nav-link-text">
            <i className="fa-solid sidebar-icons fa-gear"></i>
            Settings
          </p>
        </div>
      </a>

      <img
        className="sidebar-img"
        src="images\dashboard-images\sidebar-img.jpg"
        alt=""
      />

      <a className="sidebar-link-tag" href="">
        <div className="nav-item">
          <p className="nav-link-text">
            <i className="fa-solid sidebar-icons sidebar-icons fa-right-from-bracket"></i>{" "}
            Log out
          </p>
        </div>
      </a>
    </div>
  );
};

export default SideBar;
