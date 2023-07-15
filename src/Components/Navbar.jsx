import React from "react";

const Navbar = () => {
  return (
    <header className="pc-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <!-- SEARCH BAR START --> */}
          <div className="p-1 bg-light header-search-div rounded rounded-pill mb-4">
            <div className="input-group">
              <input
                type="search"
                id="header-search-input"
                placeholder="Enter search"
                aria-describedby="nav-search-button"
                className="form-control rounded-pill nav-search-box border-0 bg-light"
              />
              <div className="input-group-append">
                <button
                  id="nav-search-button"
                  type="submit"
                  className="btn btn-link text-primary"
                >
                  <i className="fa fa-search header-search-icon"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- SEARCH BAR END -->

                                <!-- HEADER NOTIFICATION ICONS START --> */}
          <div className="header-icons-div">
            <i className="fa-regular fa-bell header-notification-icon"></i>
            <i className="fa-solid fa-gear header-notification-icon"></i>
          </div>
          {/* <!-- HEADER NOTIFICATION ICONS END -->

                                <!-- USER IMAGE START --> */}
          <div className="header-user-div">
            <div className="row">
              <div className="col-auto header-user-text-col">
                <p className="header-user-text">
                  <span>Mohammed</span> <br /> <span>Gadafi</span>
                </p>
              </div>
              <div className="col-auto header-user-img-col">
                <img
                  className="header-user-img"
                  src="images\landing-page-images\face3.jpg"
                  alt="user-profile-pic"
                />
              </div>
            </div>
          </div>
          {/* <!-- USER IMAGE END --> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
