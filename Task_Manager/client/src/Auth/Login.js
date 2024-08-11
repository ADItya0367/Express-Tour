import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     const [loading,setLoading] = useState(false);
     const navigate = useNavigate();

    const handler = async()=>{
       
        console.log( email, password);
        try {
            setLoading(true);
            let data={
                email,
                password
            }
            const response = await AuthServices.loginUser(data)
            console.log(response);
            localStorage.setItem('ToDoUser',JSON.stringify(response.data));
            message.success("Logged in Successfully");
            navigate('/todo');
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
    <img className="imgss" src="https://www.seekpng.com/png/detail/125-1253777_register-icon-png.png" alt="imaghge"/>
  <h2>Login</h2>
   <div>
    <Input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <Input.Password placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
   </div>
    <div>
     <Button loading={loading} type="primary" disabled={!email || !password} onClick={handler}>Login</Button>
     <div className="below">
       New User? <Link to="/register" className="reg">Register</Link>
     </div>
     </div>
</div>  
</div>  
    </>
  );
}

export default Login;






  
