import React from "react";
import { useState } from "react";

export default function Post({ title, content, author, dateCreated }) {
  console.log("Date created" + dateCreated);

  const current = new Date();
  const [dateCompleted, setDateCompleted] = useState("");
  const [completed, setCompleted] = useState("False");

  const handleChange = () => {
    console.log("Completetion done");
    var currentDate = `${current.getDate()}/${current.getMonth() +
      1}/${current.getFullYear()}`;
    if (dateCompleted != "") {
      setDateCompleted("");
      setCompleted("False");
    } else {
      setDateCompleted(currentDate);
      setCompleted("True");
    }
    console.log(dateCompleted);
  };

  return (
    <div className="container" style={{ marginBottom: "40px" }}>
      <div className="row">
        <div className="col">
          <input type="checkbox" onChange={handleChange} />
        </div>
        <div className="col">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="row">
        <i>
          Description <b>{content}</b>
        </i>
      </div>
      <i>
        Written by <b>{author}</b>
      </i>
      <br></br>
      <i>
        Date Created <b>{dateCreated}</b>
      </i>
      <br></br>
      <i>
        Completed <b>{completed}</b>
      </i>
      <br></br>
      <i>
        Date Completion<b>{dateCompleted}</b>
      </i>
    </div>
  );
}
