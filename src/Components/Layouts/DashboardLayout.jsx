import React, { children } from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-div">
      <div className="">
        <div className="row pc-header-sidebar">
          <div className="col-sm-3">
            {/* <!-- ASIDE START  --> */}
            <aside className="pc-sidebar">
              <div className="container">
                {/* <!-- LOGO DIV START  --> */}
                <div className="logo-div">
                  <p className="logo-text">
                    <span className="logo-span">Pass</span>
                    <i className="fa-solid fa-circle-check logo-icon"></i>
                    <span className="logo-span">mark</span>
                  </p>
                </div>
                <SideBar />
              </div>
            </aside>
          </div>

          <div className="col-sm-9">
            <section>
              <Navbar />
            </section>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
