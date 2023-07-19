import React from "react";

const index = () => {
  return (
    <section>
      <div className="container body-content">
        <p className="header-text">Schedule an online className</p>
        <form action="">
          <div className="row container">
            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classTitle" className="form-label">
                Class title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter className title"
                id="classTitle"
              />
            </div>

            <div className="input-field-div col-12 col-lg-6">
              <label htmlFor="classInstructor" className="form-label">
                Class instructor
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter className instructor"
                id="classInstructor"
              />
            </div>

            <div className="input-field-div col-lg-12">
              <label htmlFor="classDescription" className="form-label">
                Class description
              </label>
              <textarea
                className="form-control text-area"
                placeholder="Enter the className description"
                id="classDescription"
              ></textarea>
            </div>

            <div className="input-field-div col-lg-12">
              <label className="form-label" htmlFor="">
                Select course
              </label>
              <select className="form-select">
                <option selected>Select className course</option>
                <option value="1">Course One</option>
                <option value="2">Course Two</option>
                <option value="3">Course Three</option>
              </select>
            </div>

            <div className="input-field-div col-lg-6">
              <label className="form-label" htmlFor="classDate">
                Select class date
              </label>
              <input id="classDate" className="form-control" type="date" />
            </div>

            <div className="input-field-div col-lg-6">
              <label className="form-label" htmlFor="classTime">
                Select class time
              </label>
              <input id="classTime" className="form-control" type="time" />
            </div>
          </div>
          <button
            className="btn btn-primary add-new-class-button"
            type="submit"
          >
            Add new class
          </button>
        </form>
      </div>
    </section>
  );
};

export default index;