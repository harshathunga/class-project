import Header from "./Header.js";
import React, { useState } from "react";
import axios from "axios";
import "./Como.css";
import { Navigate, useNavigate } from "react-router";
import Home from "./Home.js";
function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  // const [auth, setauth] = useState(false);
  // const [token, settoken] = useState("");
  const [data, setdata] = useState();

  // const  { token, auth, message, results } = data

  // console.log("this is auth", data);
  // console.log("2nd", data);S

  axios.defaults.withCredentials = true;

  const handleregister = (e) => {
    e.preventDefault();

    // console.log(name, email, password)

    // try {
    //   const res = await axios
    //     .post(
    //       "http://localhost:3001/users/login",
    //       {
    //         email: email,
    //         password_hash: password,
    //       },

    //       { withCredentials: true }
    //     )
    //     .then((res) => res.json())
    //     .then((res) => console.log(res));

    // } catch (err) {
    //   console.log(err);
    // }

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
      .then((res) => console.log("this is ", res.data.auth));

    setemail("");
    setpasword("");
  };
  return (
    <div>
      <>
        {/* {" "}  */}
        <Header></Header>
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
      </>
    </div>
  );
}

export default Login;
