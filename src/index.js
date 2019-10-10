import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Form from "./Form";

import "./styles.css";

const moment = require("moment");

function App() {
  // state
  const [entries, setEntries] = useState([]);

  function getAllEntries() {
    axios("https://dljs5.sse.codesandbox.io/").then(res =>
      setEntries(res.data)
    );
  }

  useEffect(() => {
    getAllEntries();
  }, []);

  const addEntry = data => {
    axios({
      method: "post",
      url: "https://dljs5.sse.codesandbox.io/signin",
      data: data
    }).then(res => setEntries([...entries, res.data]));
  };

  const renderEntries = entries.map(e => (
    <tr key={e._id}>
      <td>{e.name}</td>
      <td>{e.org}</td>
      <td>{e.issue}</td>
      <td>{moment(e.date).format("MMMM Do YYYY")}</td>
    </tr>
  ));

  return (
    <div className="App">
      <h3>Sign-in Sheet</h3>
      <Form add={addEntry} />
      <table style={{ width: "100%" }}>
        <tr>
          <th>Customer</th>
          <th>Org/Building</th>
          <th>Current Issue</th>
          <th>Date</th>
        </tr>
        {renderEntries}
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//   <p key={e._id}>
//   Customer: {e.name} | Org/Building: {e.org} | Current Issue: {e.issue} |
//   Date: {moment(e.date).format("MMM do, YYYY")}
// </p>
