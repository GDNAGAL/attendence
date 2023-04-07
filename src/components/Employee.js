import React, { useState } from "react";
import { useEffect } from "react";
import AddEmployee from "./AddEmployee";
import AlertMsg from "./AlertMsg";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import { Dialog, Classes } from "@blueprintjs/core";
// import "../assets/css/font-awesome.css";
// import "../assets/css/bootstrap.css";
// import "../assets/css/custom.css";

export default function Employee() {
  // get data from api

  async function apiResponse() {
    const response = await fetch(
      "https://attendancesys-40864-default-rtdb.firebaseio.com/empData.json"
    );
    const data = await response.json();
    const loadEmpdata = [];
    for (const key in data) {
      loadEmpdata.push({
        id: key,
        Name: data[key].empName,
        Designation: data[key].empDesignation,
        Mobile: data[key].empMob,
      });
    }
    setLoadData(loadEmpdata);
  }
  useEffect(() => {
    apiResponse();
  }, []);
  const [loadData, setLoadData] = useState([]);
  // console.log(records);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const openHandler = () => {
    setIsModalOpen(true);
  };
  const hideModalHandler = () => {
    setIsModalOpen(false);
  };
  const onOpenAlert = () => {
    setIsAlertOpen(true);
  };

  setTimeout(() => {
    setIsAlertOpen(false);
  }, 2500);

  return (
    <>
      {isModalOpen && (
        <AddEmployee onHideCart={hideModalHandler} onOpenAlert={onOpenAlert} />
      )}
      {isAlertOpen && <AlertMsg />}
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
                {loadData.map((list, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{list.id}</td>
                    <td>{list.Name}</td>
                    <td>{list.Designation}</td>
                    <td className="text-center">{list.Mobile}</td>
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
