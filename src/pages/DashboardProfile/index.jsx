import React from "react";

const index = () => {
  return (
    <div class="container-fluid body-content">
      {/* <!-- CONTENT START  --> */}

      <div class="user-profile-image-div">
        <img
          class="user-profile-image"
          src="images/landing-page-images/face4.jpg"
          alt="user image"
        />
        <label for="profilePicInput" class="user-camera-icon-label">
          <i class="fa-solid fa-camera user-camera-icon"></i>
        </label>
        <input class="profilePicInput" id="profilePicInput" type="file" />
      </div>

      <div class="user-details-div">
        <div class="user-header-div">
          <p class="user-name">Mohammed Gadafi</p>
          <p class="user-role">
            Student{" "}
            <span>
              <a class="user-email-link" href=" mailto:user-email@example.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </span>
            <span>
              <a class="user-phone-number-link" href="tel:+2349052927094">
                <i class="fa-solid fa-square-phone"></i>
              </a>
            </span>
          </p>
        </div>
      </div>

      <div class="user-courses-div">
        <div class="user-courses-header">Registered courses</div>
        <div class="user-courses">
          {/* <!-- COURSES START  --> */}
          <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
            <div class="col">
              <div class="courses-card">
                <img
                  src="images\dashboard-images\sat.png"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="courses-card-body">
                  <p class="courses-card-title">SAT</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="courses-card">
                <img
                  src="images\dashboard-images\sat.png"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="courses-card-body">
                  <p class="courses-card-title">SAT</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="courses-card">
                <img
                  src="images\dashboard-images\sat.png"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="courses-card-body">
                  <p class="courses-card-title">SAT</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="courses-card">
                <img
                  src="images\dashboard-images\sat.png"
                  class="card-img-top courses-card-img"
                  alt="sat"
                />
                <div class="courses-card-body">
                  <p class="courses-card-title">SAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- CONTENT END  --> */}
    </div>
  );
};

export default index;
