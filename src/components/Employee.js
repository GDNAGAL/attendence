import React, { useState } from "react";
import { useEffect } from "react";
import AddEmployee from "./AddEmployee";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import { Dialog, Classes } from "@blueprintjs/core";
// import "../assets/css/font-awesome.css";
// import "../assets/css/bootstrap.css";
// import "../assets/css/custom.css";

export default function Employee() {
  // get data from api

  useEffect(() => {
    fetch("https://64254d1b7ac292e3cffca04a.mockapi.io/emp/empdata")
      .then((response) => response.json())
      .then((data) => setRecords(data));
  }, []);

  const [records, setRecords] = useState([]);
  // console.log(records);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openHandler = () => {
    setIsModalOpen(true);
  };
  const hideModalHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && <AddEmployee onHideCart={hideModalHandler} />}
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="col-md-12" style={{ display: "flex" }}>
            <h2 style={{ width: "inherit" }}>Employee</h2>
            <button className="btn btn-danger " onClick={openHandler}>
              Add Employee
            </button>
          </div>
          <hr />
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">S.No.</th>
                  <th className="text-center">Emp ID</th>
                  <th>Emp Name</th>
                  <th>Designation</th>
                  <th className="text-center">Emp Mobile</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map((list, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{list.id}</td>
                    <td>{list.name}</td>
                    <td>{list.name}</td>
                    <td className="text-center">{list.mobile}</td>
                    <td className="text-center"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
