import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const EmpDetails = () => {
    const[empData,setEmpdata] = useState(null);
    const{Empid} = useParams();
    
    useEffect(() => {
        fetch(' http://localhost:8000/Emp/'+Empid)
        .then((res)=>{
            return res.json();
        })
        .then((resp)=>{
            setEmpdata(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    );
    return(
        <>
            <center>
            {empData && (
        <div>
          <h1>Employee Information</h1>
          <br />
          <h1>Id: ({empData.id}) </h1>
          <br />
          <h1>Name: {empData.name}</h1>
          <br />
          <h1>Email: {empData.email}</h1>
          <br />
          <h1>Phone No: {empData.phno}</h1>
          <br />
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      )}
            </center>
        </>
    )
}

export default EmpDetails;