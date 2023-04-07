import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import "./AddEmp.css";

export default function AddEmployee(props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [inputVal, setinputVal] = useState({
    empName: "",
    empDesignation: "",
    empMob: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setinputVal((prev) => ({ ...prev, [name]: value }));
  };
  //send data to database
  function submitHandler(event) {
    event.preventDefault();
    // validate form inputs
    for (const property in inputVal) {
      if (inputVal[property].trim().length == 0) {
        setErrorMsg("**All Fields are Required.");
        return;
      }
    }
    const addEmpHandler = async () => {
      await fetch(
        "https://attendancesys-40864-default-rtdb.firebaseio.com/empData.json",
        {
          method: "POST",
          body: JSON.stringify(inputVal),
        }
      );
    };
    addEmpHandler();
    props.onHideCart();
    props.onOpenAlert();
  }

  return (
    <>
      <Modal>
        <form onSubmit={submitHandler} autoComplete="off">
          <div>
            <h4>Add New Employee</h4>
            <hr />
            <div className="form-cnt">
              <span style={{ color: "red", fontSize: "16px" }}>{errorMsg}</span>
              <br />
              <Input
                label="Employee Name"
                onChangHandler={inputHandler}
                ClassName="inputtext"
                input={{
                  type: "text",
                  name: "empName",
                }}
              />

              <Input
                label="Designation"
                onChangHandler={inputHandler}
                input={{
                  type: "text",
                  name: "empDesignation",
                }}
              />
              <Input
                label="Mobile Number"
                onChangHandler={inputHandler}
                input={{
                  type: "number",
                  name: "empMob",
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
    </>
  );
}
