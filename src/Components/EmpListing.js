
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const EmpListing = () => {
    const navigate = useNavigate();
    const LoadDetails = (id) => {
        navigate("/Emp/details/"+id);
    }
    const LoadEdit = (id) => {
        navigate("/Emp/Edit/"+id);
    }
    const LoadDelete = (id) => {
        if(window.confirm('do you want to delete ?')){
            fetch("http://localhost:8000/Emp/"+id,{
                method: "Delete"
            })
            .then((res)=>{
                alert("Delete Succeesfully");
                window.location.reload();
            })
            .catch((err)=>{
                console.log(err.message);
            })
        }
    }
    
    const[empData,SetEmpData] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:8000/Emp')
        .then((res)=>{
            return res.json();
        })
        .then((resp)=>{
            SetEmpData(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    });

    return (
    <>
      <div className="container">
        <br />
        <center><h1>Employee Listing</h1></center>
        <Link to="/Emp/create">
          <button className="btn btn-primary">Add (+)</button>
        </Link>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                empData && 
                empData.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phno}</td>
                        <td>
                            <a onClick={() => {LoadDetails(item.id)}} className="btn btn-primary">Details</a> &nbsp;&nbsp;
                            <a onClick={() => {LoadEdit(item.id)}}className="btn btn-success">Update</a> &nbsp;&nbsp;
                            <a onClick={() => {LoadDelete(item.id)}}className="btn btn-danger">Delete</a> &nbsp;&nbsp;
                        </td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmpListing;