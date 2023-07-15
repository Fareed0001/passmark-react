import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid body-content">
        <p className="dashboard-greetings">Good morning Mohammed Gadafi</p>
        <div className="dashboard-content-board-div">
          <img
            className="dashboard-content-board-img"
            src="images\dashboard-images\dashboard.jpg"
            alt="dashboard-animation"
          />
        </div>
        <div className="container-fluid dashboard-content-div">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="dashboard-content-header-div">
                <p className="dashboard-content-header">Popular Courses</p>
                <p className="dashboard-content-sub-header">All courses</p>
              </div>

              {/* <!-- dashboard content card start  --> */}
              <div className="dashboard-content-card-div">
                <div className="dashboard-content-card">
                  <div className="row dashboard-content-row">
                    <div className="col-3">
                      <img
                        className="img-fluid dashboard-content-img"
                        src="images\landing-page-images\business-vector.png"
                        alt="business"
                      />
                    </div>
                    <div className="col-9">
                      <p className="dashboard-content-text">
                        Business Marketing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="dashboard-content-card">
                  <div className="row dashboard-content-row">
                    <div className="col-3">
                      <img
                        className="img-fluid dashboard-content-img"
                        src="images\landing-page-images\design-vector.png"
                        alt="design"
                      />
                    </div>
                    <div className="col-9">
                      <p className="dashboard-content-text">UI/UX Design</p>
                    </div>
                  </div>
                </div>

                <div className="dashboard-content-card">
                  <div className="row dashboard-content-row">
                    <div className="col-3">
                      <img
                        className="img-fluid dashboard-content-img"
                        src="images\landing-page-images\writing-vector.png"
                        alt="writing"
                      />
                    </div>
                    <div className="col-9">
                      <p className="dashboard-content-text">Content writing</p>
                    </div>
                  </div>
                </div>

                <div className="dashboard-content-card">
                  <div className="row dashboard-content-row">
                    <div className="col-3">
                      <img
                        className="img-fluid dashboard-content-img"
                        src="images\landing-page-images\web-development-vector.png"
                        alt="web-dev"
                      />
                    </div>
                    <div className="col-9">
                      <p className="dashboard-content-text">Web development</p>
                    </div>
                  </div>
                </div>

                <div className="dashboard-content-card">
                  <div className="row dashboard-content-row">
                    <div className="col-3">
                      <img
                        className="img-fluid dashboard-content-img"
                        src="images\landing-page-images\storage-vector.png"
                        alt="storage"
                      />
                    </div>
                    <div className="col-9">
                      <p className="dashboard-content-text">Cloud storage</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dashboard content card end --> */}
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="dashboard-content-header-div dashboard-activity-header-div">
                <p className="dashboard-content-header dashboard-activity-header">
                  Current Activities
                </p>
              </div>
              {/* <!-- dashboard activity start  --> */}
              <div className="dashboard-activity-div">
                <div className="dashboard-activity-gif-div">
                  <img
                    className="dashboard-activity-img"
                    src="images\dashboard-images\graph-diagram-animation.gif"
                    alt=""
                  />
                </div>
                <div className="dashboard-activity-resources-div">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dashboard-activity-courses">
                        <p className="dashboard-activity-header">40+</p>
                        <p className="dashboard-activity-text">
                          Available courses
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dashboard-activity-videos">
                        <p className="dashboard-activity-header">90+</p>
                        <p className="dashboard-activity-text">
                          Available videos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dashboard activity end  --> */}
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="dashboard-content-header-div">
                <p className="dashboard-content-header">Best Instructors</p>
                <p className="dashboard-content-sub-header">See more</p>
              </div>
              {/* <!-- dashboard instructor card start  --> */}
              <div className="dashboard-instructor-card-div">
                <div className="card dashboard-instructor-card">
                  <div className="row dashboard-instructor-row">
                    <div className="col-4">
                      <img
                        className="img-fluid rounded-start dashboard-instructor-img"
                        src="images\landing-page-images\design-instructor.jpg"
                        alt="instructor"
                      />
                    </div>
                    <div className="col-8 dashboard-instructor-text-col">
                      <p className="dashboard-instructor-text">
                        Kafayat Asus <br />{" "}
                        <span className="dashboard-instructor-sub-text">
                          UI/UX Designer
                        </span>
                        <br />{" "}
                        <span className="instructor-icon">
                          {/* <i className="fa-brands fa-figma"></i> */}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card dashboard-instructor-card">
                  <div className="row dashboard-instructor-row">
                    <div className="col-4">
                      <img
                        className="img-fluid rounded-start dashboard-instructor-img"
                        src="images\landing-page-images\developer-instructor.jpg"
                        alt="instructor"
                      />
                    </div>
                    <div className="col-8 dashboard-instructor-text-col">
                      <p className="dashboard-instructor-text">
                        Fareed Sylvester <br />{" "}
                        <span className="dashboard-instructor-sub-text">
                          Web developer
                        </span>
                        <br />{" "}
                        <span className="instructor-icon">
                          <i className="fa-solid fa-code"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card dashboard-instructor-card">
                  <div className="row dashboard-instructor-row">
                    <div className="col-4">
                      <img
                        className="img-fluid rounded-start dashboard-instructor-img"
                        src="images\landing-page-images\writing-instructor.jpg"
                        alt="instructor"
                      />
                    </div>
                    <div className="col-8 dashboard-instructor-text-col">
                      <p className="dashboard-instructor-text">
                        Isiah Vincent <br />{" "}
                        <span className="dashboard-instructor-sub-text">
                          Writer
                        </span>
                        <br />{" "}
                        <span className="instructor-icon">
                          <i className="fa-solid fa-marker"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dashboard instructor card end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
