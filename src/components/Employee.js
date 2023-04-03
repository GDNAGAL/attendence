import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      {/* <div
        id="page-wrapper"
        style={{
          display: "block",
          width: 400,
          padding: 30,
        }}
      >
        <h4>ReactJS Blueprint Dialog Component</h4>
        <Dialog title="Dialog Title" icon="info-sign" isOpen={true}>
          <div className={Classes.DIALOG_BODY}>
            <p>Sample Dialog Content to display!</p>
          </div>
        </Dialog>
      </div>  */}
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="col-md-12" style={{ display: "flex" }}>
            <h4 style={{ width: "inherit" }}>Employee</h4>
            <Link to="/add-emp">
              <button className="btn btn-danger ">Add Employee</button>
            </Link>
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
