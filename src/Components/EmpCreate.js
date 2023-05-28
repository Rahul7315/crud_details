import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhno] = useState("");

    const style = {
        margin: '80px 0px 100px 500px'
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        const empData = {id,name,email,phno};
        e.preventDefault();
        console.log({id,name,email,phno});
        
        fetch('http://localhost:8000/Emp',{
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(empData)
        })
        .then((res)=>{
            alert("Data Created Successfully");
            navigate('/');
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    return (
        <>
            <center>
                <h1>EmpLoyee Create</h1>
            </center>
                <form onSubmit={handleSubmit} style={style}>
                    <div className="form-group form-group col-md-6 mb-3">
                        <label >Id</label>
                        <input value={id} type="number" className="form-control" disabled="disabled" placeholder="Enter Id" />
                    </div>

                    <div className="form-group form-group col-md-6 mb-3">
                        <label >First Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}   className="form-control" placeholder="Enter First" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label >Email</label>
                        <input type="text"  value={email} onChange={e => setEmail(e.target.value)} className="form-control " placeholder="Enter email" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label >Phone Number</label>
                        <input type="text"  value={phno} onChange={e=>setPhno(e.target.value)} className="form-control " placeholder="Enter Phone Number" />
                    </div>

                    <button type="submit" className="btn btn-primary" >Submit</button> &nbsp;
                    <Link to="/"><button type="submit" className="btn btn-success">Back</button></Link>
                </form>
            
        </>
    )
}

export default EmpCreate;