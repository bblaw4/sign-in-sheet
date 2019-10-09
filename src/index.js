import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Form from "./Form";

const moment = require("moment");

function App() {
  // state
  const [entries, setEntries] = useState([]);

  function getAllEntries() {
    axios("https://pqsf9.sse.codesandbox.io/").then(res =>
      setEntries(res.data)
    );
  }

  useEffect(() => {
    getAllEntries();
  }, []);

  const addEntry = data => {
    axios({
      method: "post",
      url: "https://pqsf9.sse.codesandbox.io/signin",
      data: data
    }).then(res => setEntries([...entries, res.data]));
  };

  const renderEntries = entries.map(e => (
    <p key={e._id}>
      Customer: {e.name} | Org/Building: {e.org} | Current Issue: {e.issue} |
      Date: {moment(e.date).format("MMM do, YYYY")}
    </p>
  ));

  return (
    <div className="App">
      <h3>Sign-in Sheet</h3>
      <Form add={addEntry} />
      {renderEntries}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
