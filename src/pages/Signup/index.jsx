import React from "react";

const index = () => {
  return (
    <section className="signupPage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 sign-up-first-col">
            <img
              class="sign-up-img"
              src="images/register-images/sign-up.gif"
              alt="sign-up.gif"
            />
          </div>
          <div class="col-lg-7 sign-up-second-col">
            <div class="container">
              <div class="container agent-student">
                <input
                  class="agent-student-checkbox"
                  id="checkbox"
                  name="checkbox"
                  type="checkbox"
                />
                <label class="label agent-student-label" for="checkbox" />
              </div>
              <p class="sign-up-header student-sign-up">
                <i class="fa-solid fa-user sign-up-header-icon"></i>
                Student sign up
              </p>
              <p class="sign-up-header agent-sign-up">
                <i class="fa-solid fa-user-secret sign-up-header-icon"></i>
                Agent sign up
              </p>
              {/* <!-- FORM  --> */}
              <form
                action=""
                method="post"
                class="row g-2 needs-validation form"
                validate=""
              >
                <div class="col-md-6">
                  <label for="fname" class="form-label">
                    First name
                  </label>
                  <input type="text" class="form-control" id="fname" required />
                </div>
                <div class="col-md-6">
                  <label for="lname" class="form-label">
                    Last name
                  </label>
                  <input type="text" class="form-control" id="lname" required />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label" for="phone">
                    Phone number
                  </label>
                  <input type="text" id="phone" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="confirmPassword" class="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    required
                  />
                </div>
                <div class="col-md-12 company-name-div">
                  <label for="company" class="form-label">
                    Company name
                  </label>
                  <input type="text" class="form-control" id="companyname" />
                </div>

                <div class="check-boxes-div">
                  <div class="col-12">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember Me
                    </label>
                    <a class="forgot-password" href="">
                      forgot password?
                    </a>
                  </div>

                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label class="form-check-label" for="invalidCheck">
                        I agree to the{" "}
                        <a class="terms-link" href="">
                          terms
                        </a>{" "}
                        and{" "}
                        <a class="terms-link" href="">
                          conditions
                        </a>
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- BOTTON  --> */}
                <div class="col-md-6 d-grid">
                  <button
                    class="btn btn-primary create-account-button"
                    type="submit"
                  >
                    <i class="fa-solid fa-user button-icons"></i>
                    Create account
                  </button>
                </div>
                <div class="col-md-6 d-grid">
                  <button class="btn btn-dark google-button" type="submit">
                    <i class="fa-brands fa-google button-icons"></i>
                    Sign-in with google
                  </button>
                </div>
                {/* <!-- BUTTON  --> */}

                <p class="account">
                  I have an account{" "}
                  <a class="account-link" href="sign-in.html">
                    Sign in
                  </a>
                </p>
              </form>
              {/* <!-- FORM  --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
