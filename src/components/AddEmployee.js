import React, { useState } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import "./AddEmp.css";
import { Form } from "react-router-dom";
// import "../assets/css/font-awesome.css";
// import "../assets/css/bootstrap.css";
// import "../assets/css/custom.css";

export default function AddEmployee(props) {
  const [empName, setEmpName] = useState();
  const [empDesignation, setEmpDesignation] = useState();
  const [empMob, setEmpMob] = useState();

  function submitHandler(event) {
    event.preventDefault();
    const empData = {
      Name: empName,
      Designation: empDesignation,
      Mobile: empMob,
    };
    const addEmpHandler = async () => {
      await fetch(
        "https://attendancesys-40864-default-rtdb.firebaseio.com/empData.json",
        {
          method: "POST",
          body: JSON.stringify(empData),
        }
      );
    };
    addEmpHandler();
    props.onHideCart();
    alert("Success");
  }
  const nameChangeHandler = (e) => setEmpName(e.target.value);
  const designationChangeHandler = (e) => setEmpDesignation(e.target.value);
  const mobileChangeHandler = (e) => setEmpMob(e.target.value);
  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <div>
          <h4>Add New Employee</h4>
          <hr />
          <div className="form-cnt">
            <Input
              label="Employee Name"
              onChangHandler={nameChangeHandler}
              ClassName="inputtext"
              input={{
                type: "text",
              }}
            />
            <Input
              label="Designation"
              onChangHandler={designationChangeHandler}
              input={{
                type: "text",
              }}
            />
            <Input
              label="Mobile Number"
              onChangHandler={mobileChangeHandler}
              input={{
                type: "number",
              }}
            />
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Add Employee
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger " onClick={props.onHideCart}>
          Cancel
        </button>
      </form>
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
