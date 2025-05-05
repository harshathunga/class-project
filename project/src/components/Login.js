import Header from "./Header.js";
import React, { useContext, useState } from "react";
import axios from "axios";
import "./Como.css";
import {  useNavigate } from "react-router";
import { AuthContext } from "./AuthContext.js";

// export const Usersdata = React.createContext()


// import Home from "./Home.js";
function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");


  axios.defaults.withCredentials = true;

  const handleregister = (e) => {
    e.preventDefault();

   
    axios
      .post(
        "http://localhost:3001/users/login",
        {
          email: email,
          password_hash: password,
        },

        { withCredentials: true }
      )
      //   .then((e) => console.log(e))
      // .then((resp) => resp.json())
      // .then((res) => console.log(res.data.auth))
      .then((res) => {
        if(res.data.auth === true){
          console.log(res.data.token)
          // settoken(res.data.token)
          // setdata(res.data.results[0])
          setUser(res.data)

          navigate('/home',{
            state: {
              data: res.data.results[0],
              // user: res.data,
            },
          })

          // axios
          // .get("http://localhost:3001/users/auth", {
          //   headers: {
          //     x: `Bearer ${token}`,
          //   },
          // }).then((verres)=>{
          //   if(verres.data.auth === true){
          //     alert(res.data.message)
          //     console.log(verres.data)
          //     navigate('/home')
          //   } else {
          //     alert("User not verified");
          //   }
          // }) .catch((err) => {
          //   console.error("Token verification failed", err);
          //   alert("Invalid or expired token");
          // });

          // axios.get("http://localhost:3001/users/auth",{
          //   Headers:{
          //     x-access-tokens: `Bearer ${token}`,
          //   }
          // })
          
        }else{
          alert("login failed")
          console.log("login failed")
        }
      }).catch((err) => {
        alert("invalid user or password / ", err.response.data.msg)
        console.error("Error during login:", err.response.data.msg);
      });

    setemail("");
    setpasword("");
  };
  return (
    <div>
      <>
        {/* {" "}  */}
        <Header></Header>

        {/* <Usersdata.Provider > */}
        <div className=" container mt-8">
          <div class="mb-3">
            <label for="email" class="form-label">
              Email{" "}
            </label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              name="email"
              type="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              password
            </label>
            <input
              value={password}
              onChange={(e) => setpasword(e.target.value)}
              name="password"
              type="password"
            ></input>
          </div>
          <button onClick={handleregister}> Login</button>
        </div>

        {/* </Usersdata.Provider> */}
      </>
    </div>
  );
}

export default Login;
