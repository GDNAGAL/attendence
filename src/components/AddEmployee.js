import React from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import classes from "./AddEmp.css";
// import "../assets/css/font-awesome.css";
// import "../assets/css/bootstrap.css";
// import "../assets/css/custom.css";

export default function AddEmployee(props) {
  return (
    <Modal>
      <div>
        <h4>Add New Employee</h4>
        <hr />
        <div className="form-cnt">
          <Input
            label="Employee Name"
            ClassName="inputtext"
            input={{
              type: "text",
            }}
          />
          <Input
            label="Designation"
            input={{
              type: "text",
            }}
          />
          <Input
            label="Mobile Number"
            input={{
              type: "number",
            }}
          />
        </div>
      </div>
      <button className="btn btn-success ">Add Employee</button>
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-danger " onClick={props.onHideCart}>
        Cancel
      </button>
    </Modal>
  );
}
{
  /* <>
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
    </> */
}
