import React from "react";
import LabelInput from "./Label";
import { Link } from "react-router-dom";

export default function Form(props) {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <h2
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          {props.formHeading}
                        </h2>

                        <div className="form-outline mb-4">
                          <LabelInput
                            labelText="Email address"
                            type="email"
                            id="form2Example10"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <LabelInput
                            labelText="Password"
                            type="password"
                            id="form2Example07"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <LabelInput
                            labelText="Confirm Password"
                            type="password"
                            id="form2Example37"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={props.buttonAction}>
                            {props.buttonText}
                          </button>
                        </div>

                        <Link className="small text-muted" to="/">
                          {props.secondOptionText}
                        </Link>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          {props.questionText}{" "}
                          <Link to="/" style={{ color: "#393f81" }}>
                            {props.ctaText}
                          </Link>
                        </p>
                        <Link to="/" className="small text-muted">
                          Terms of use.
                        </Link>
                        <Link to="/" className="small text-muted">
                          Privacy policy
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
