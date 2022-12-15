import { React, useState, useEffect } from "react";
import "../App.css";
import Spinner from "./Spinner";

const FetchFromURL = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const table = (
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
  );

  return (
    <div className="cont">
      <div>
        <h2>Data Fetch From Online JSON</h2>
      </div>
      {isLoading ? <Spinner /> : table}
    </div>
  );
};

export default FetchFromURL;
