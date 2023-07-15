import React from "react";

const index = () => {
  return (
    <div className="container-fluid body-content">
      <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
        <div className="col">
          <div className="instructor-card">
            <img
              src="images\landing-page-images\business-instructure.jpg"
              className="card-img-top instructor-card-img"
              alt="instructor"
            />
            <div className="instructor-card-body">
              <p className="instructor-name">Aaron Abraham</p>
              <p className="instructor-course-title">Business and marketing</p>
            </div>
            {/* <div className="instructor-video-list-div" id="instructorClassList0">
              <p className="instructor-video-list">
                Introduction to the coction to the coction to the coction to the
                coction to the coction to the coction to the course the course
              </p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
            </div> */}

            <div className="instructor-card-footer">
              <small className="instructor-view-classes">View classes</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="instructor-card">
            <img
              src="images\landing-page-images\design-instructor.jpg"
              className="card-img-top instructor-card-img"
              alt="instructor"
            />
            <div className="instructor-card-body">
              <p className="instructor-name">Kafayat Asus</p>
              <p className="instructor-course-title">
                Complete design course 2023
              </p>
            </div>
            {/* <div className="instructor-video-list-div" id="instructorClassList1">
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
            </div> */}
            <div className="instructor-card-footer">
              <small className="instructor-view-classes">View classes</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="instructor-card">
            <img
              src="images\landing-page-images\developer-instructor.jpg"
              className="card-img-top instructor-card-img"
              alt="instructor"
            />
            <div className="instructor-card-body">
              <p className="instructor-name">Fareed Sylvester</p>
              <p className="instructor-course-title">
                Web development bootcamp
              </p>
            </div>
            {/* <div className="instructor-video-list-div" id="instructorClassList2">
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
            </div> */}
            <div className="instructor-card-footer">
              <small className="instructor-view-classes">View classes</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="instructor-card">
            <img
              src="images\landing-page-images\writing-instructor.jpg"
              className="card-img-top instructor-card-img"
              alt="instructor"
            />
            <div className="instructor-card-body">
              <p className="instructor-name">Isiah Vincent</p>
              <p className="instructor-course-title">Professional writing</p>
            </div>
            {/* <div className="instructor-video-list-div" id="instructorClassList3">
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
              <p className="instructor-video-list">Introduction to the course</p>
            </div> */}
            <div className="instructor-card-footer">
              <small className="instructor-view-classes">View classes</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
