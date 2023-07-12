import "./dashboard.css";

const DashboardS = () => {
  return (
    <div className="sidebar-components">
      <a className="sidebar-link-tag" href="#">
        <div className="nav-item">
          <p className="nav-link-text">Dashboard</p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-className.html">
        <div className="nav-item">
          <p className="nav-link-text">My className</p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-instructor.html">
        <div className="nav-item">
          <p className="nav-link-text">Instructors</p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-courses.html">
        <div className="nav-item course-nav-item">
          <p className="nav-link-text"> Courses</p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="">
        <div className="nav-item">
          <p className="nav-link-text">Message</p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-profile.html">
        <div className="nav-item">
          <p className="nav-link-text"> Profile</p>
        </div>
      </a>
      <a className="sidebar-link-tag" href="dashboard-settings.html">
        <div className="nav-item">
          <p className="nav-link-text">Settings</p>
        </div>
      </a>

      {/* <img className="sidebar-img" src="images\dashboard-images\sidebar-img.jpg" alt=""> */}

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

export default DashboardS;
