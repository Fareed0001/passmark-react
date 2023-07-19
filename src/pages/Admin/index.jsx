import React from "react";
import {
  BiBookAdd,
  BiCheckCircle,
  BiClipboard,
  BiShieldMinus,
  BiSolidContact,
} from "react-icons/bi";
import Link from "next/link";
import { FiPenTool } from "react-icons/fi";

const index = () => {
  return (
    <section>
      <div className="container body-content first-body-content">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <Link className="admin-card-link" href="/Admin/AddCourse">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiBookAdd className=" admin-card-icon" />
                <p className="admin-card-div-text card-text">Add new course</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link " href="/Admin/AddNewClass">
            <div className="admin-card-div  card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiClipboard className=" admin-card-icon" />
                <p className="admin-card-div-text card-text">Add new class</p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/AdminSetOnlineClass">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiShieldMinus className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Schedule online className
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="/Admin/AdminVerifyAgent">
            <div className="admin-card-div card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <BiCheckCircle className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Verify new agents
                </p>
              </div>
            </div>
          </Link>

          <Link className="admin-card-link" href="Admin/AddNewInstructor">
            <div className="admin-card-div card mb-3">
              <div className="card-body">
                <p className="card-body flex items-center justify-center flex-col">
                  <BiSolidContact className="admin-card-icon" />
                  Add new instructor
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container body-content second-body-content">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <Link className="admin-card-link" href="/Admin/AdminStartOnlineClass">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body flex items-center justify-center flex-col">
                <FiPenTool className="admin-card-icon" />
                <p className="admin-card-div-text card-text">
                  Start online className
                </p>
              </div>
            </div>
          </Link>

          <a className="admin-card-link" href="/Admin/SeeAllAdmin">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body">
                <i className="fa-solid fa-user-secret admin-card-icon"></i>
                <p className="admin-card-div-text card-text">See all agents</p>
              </div>
            </div>
          </a>

          <a className="admin-card-link" href="admin-see-all.html">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body">
                <i className="fa-solid fa-chalkboard-user admin-card-icon"></i>
                <p className="admin-card-div-text card-text">
                  See all instructors
                </p>
              </div>
            </div>
          </a>

          <a className="admin-card-link" href="admin-see-all.html">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body">
                <i className="fa-solid fa-swatchbook admin-card-icon"></i>
                <p className="admin-card-div-text card-text">See all courses</p>
              </div>
            </div>
          </a>

          <a className="admin-card-link" href="admin-see-all.html">
            <div className="admin-card-div0 card mb-3">
              <div className="card-body">
                <i className="fa-solid fa-user admin-card-icon"></i>
                <p className="admin-card-div-text card-text">
                  See all Students
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
