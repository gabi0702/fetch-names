import React from "react";
import "../App.css";

import data from "../data/data.json";
const FetchFromFile = () => {
  return (
    <div className="cont">
      <div>
        <h2>Data Fetch From JSON File</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th className="th1" id="th1">
              ID
            </th>
            <th className="th1" id="th2">
              Name
            </th>
            <th className="th1" id="th2">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => {
            return (
              <tr>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchFromFile;
