import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";



function Register() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [loading,setLoading] = useState(false);
     const navigate = useNavigate();

    const handler = async()=>{
        try {
           setLoading(true);
           let data ={
                firstname,
                lastname,
                email,
                password
           }
           const response = await AuthServices.registerUser(data);
           message.success("Registered Successfully");
           navigate('/login');
           setLoading(false);
        } catch (error) {
          message.error("Soething Went Wrong");
            console.log(error);
            setLoading(false);
          
        }
    }

  return (
    <>
   <div className="loginbody">
   <div className="login-container">
   <img className="imgss" src="https://png.pngtree.com/png-clipart/20230312/original/pngtree-register-now-icon-label-or-tag-png-image_8984572.png" alt="imagehai"/>
  <h2>Register</h2>
   <div>
    <Input placeholder="firstname" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}}/>
    <Input placeholder="lastname" value={lastname} onChange={(e)=>{setLastName(e.target.value)}}/>
    <Input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <Input.Password placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
   </div>
    <div>
     <Button loading={loading} type="primary" disabled={!firstname || !password} onClick={handler}>Register</Button>
     <div className="below">
     Old User? <Link to="/login" className="reg">Login</Link>
     </div>
    
     </div>
</div>  
</div>  
    </>
  );
}

export default Register;






  
