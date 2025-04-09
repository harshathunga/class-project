import React, { useState } from 'react';
import axios from "axios";
import Header from './Header';
import "./Como.css";
import { useNavigate } from 'react-router';
// import { data } from 'react-router';
function Register() {

    const navigate = useNavigate()

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpasword] = useState("")

    // const [res, setres] = useState("")

    const handleregister = async(e) => {

        e.preventDefault()

        // console.log(name, email, password)

        

        axios.post("http://localhost:3001/users/register/", {
            name: name,
            email: email,
            password_hash:password
        }).then((res)=> {
            if(res.data.Status === 'fail'){
                alert(res.data.message)
            }else{
                alert(res.data.message)
            }
        });
        // console.log(e.data.message)


        // console.log()

        navigate('/login');


        setname("")
        setemail("")
        setpasword("")
        
    };
    
    return (
        <div >
            <Header />
            <div  className=' container mt-8'>
                <div class="mb-3">
                    <label for="name" class="form-label">name</label>
                    <input type="text" name='name' value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email </label>
                    <input value = {email} onChange={(e) => setemail(e.target.value)} name='email' type="email" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">password</label>
                    <input value= {password} onChange={(e) => setpasword(e.target.value)}name='password' type='password'></input>
                </div>
                <button onClick={handleregister}> Register</button>
            </div>
        </div>
    )
}

export default Register
