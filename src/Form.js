import React, { useState } from "react";

const Form = ({ add }) => {
  //state
  const [n, sn] = useState("");
  const [o, so] = useState("");
  const [i, si] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const ticket = { n, o, i };
    add(ticket);
    sn("");
    so("");
    si("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ paddingBottom: "10px" }}>
      <input
        type="text"
        value={n}
        onChange={e => sn(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={o}
        onChange={e => so(e.target.value)}
        placeholder="Org/Building"
        required
      />
      <input
        type="text"
        value={i}
        onChange={e => si(e.target.value)}
        placeholder="Current Issue"
        required
      />
      <button>Submit</button>
    </form>
  );
};
export default Form;
