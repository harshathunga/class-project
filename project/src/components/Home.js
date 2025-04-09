import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import Cookies from "js-cookie";
import "./Como.css";
function Home({token, data}) {

    // const [auth, setAuth] = useState(false)
    // const[name, setname] = useState("")
    
    const[ndata,setndata] = useState(data)



    useEffect(()=>{
        const token = localStorage.getItem("token")
        console.log(token)
        console.log(data)
        console.log(token)
        // axios.get("http://localhost:3001/users/verify").then(res => {
        //      if(res.data.Status == 'success')
        //        setAuth(true);
        //      setname(res.data.name);
        //  })
    },[])

    return (
        <div className='hello'>

            <nav>
                <h4>app name</h4>

                <ul>
                    <li><a href='/home'>home</a></li>
                    <li><a href='/login'>login</a> </li>
                    <li><a href='/register'> register</a></li>
                </ul>
            </nav>

            

            <div>
                {ndata?.map((e)=>(
                    <div>
                        <h1>hi my name is {e.token}</h1>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Home
