import React from "react";
import { Link } from "react-router-dom";
// import "../assets/css/font-awesome.css";
// import "../assets/css/bootstrap.css";
// import "../assets/css/custom.css";

const addEmployeeForm = (event) => {
  event.preventDefault();
  alert("Form Submitted");
};

export default function AddEmployee() {
  return (
    <>
      <div id="page-wrapper">
        <div id="page-inner">
          <h4>Add New Employee</h4>
          <hr />
          <form class="" onSubmit={addEmployeeForm}>
            <div class="col-md-6">
              <div class="form-group">
                <label>Enter Employee Full Name : </label>
                <input className="form-control" placeholder="Full Name" />
              </div>
              <div class="form-group">
                <label>Text Input with Placeholder</label>
                <input
                  className="form-control"
                  placeholder="PLease Enter Keyword"
                />
              </div>
              <div class="form-group">
                <label>Text Input with Placeholder</label>
                <input
                  className="form-control"
                  placeholder="PLease Enter Keyword"
                />
              </div>
              <div class="form-group">
                <button type="submit" className="btn btn-primary">
                  Save Employee Information
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Text Input with Placeholder</label>
                <input
                  className="form-control"
                  placeholder="PLease Enter Keyword"
                />
              </div>
              <div class="form-group">
                <label>Text Input with Placeholder</label>
                <input
                  className="form-control"
                  placeholder="PLease Enter Keyword"
                />
              </div>
              <div class="form-group">
                <label>Text Input with Placeholder</label>
                <input
                  className="form-control"
                  placeholder="PLease Enter Keyword"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
