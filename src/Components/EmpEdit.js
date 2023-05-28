import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EmpEdit = () => {
  const { Empid } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/Emp/" + Empid)
      .then((res) => res.json())
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setEmail(resp.email);
        setPhno(resp.phno);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [Empid]);

  const style = {
    margin: "80px 0px 100px 500px",
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const empData = {
      id: id,
      name: name,
      email: email,
      phno: phno,
    };

    fetch("http://localhost:8000/Emp/" + Empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("Data Created Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <center>
        <h1>Employee Edit</h1>
      </center>
      <form onSubmit={handleSubmit} style={style}>
        <div className="form-group form-group col-md-6 mb-3">
          <label>Id</label>
          <input
            value={id}
            type="number"
            className="form-control"
            disabled
            placeholder="Enter Id"
          />
        </div>
        <div className="form-group form-group col-md-6 mb-3">
          <label>First Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group col-md-6 mb-3">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group col-md-6 mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            className="form-control"
            placeholder="Enter Phone Number"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>{" "}
        &nbsp;
        <Link to="/">
          <button type="button" className="btn btn-success">
            Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default EmpEdit;
