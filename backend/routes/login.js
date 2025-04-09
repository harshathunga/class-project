import express from "express";
import cors from "cors";
const router = express.Router();
import dotenv from "dotenv";
// import login from "../.env"

dotenv.config({ path: "../.env" });

import mysql2 from "mysql2";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// import db from "./post"
import db from "./db.js";

// // const db = mysql2.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "Tharipriya21@",
// //     database: "advance_dev",

// // })

// db.connect((err)=> {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(' connected')
//     }
// })

router.get("/locations/:userId", (req, res) => {
  const userId = req.params.userId;
  const query = "SELECT * FROM locations WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Failed to fetch locations", err);
      return res.status(500).json({ message: "Server error" });
    }

    res.json(results);
  });
});

router.post("/location", (req, res) => {
  const { place_name, country, latitude, longitude } = req.body;

  db.query(
    "insert into locations (place_name,country,latitude,longitude values(?,?,?,?)",
    [place_name, country, latitude, longitude],
    (err, results) => {
      if (err) {
        res.json({ message: err });
      } else {
        res.json({ message: "location updated" });
      }
    }
  );

  //     const {name,email,password_hash} = req.body;

  // //     console.log(name,email,password_hash)
  // // })
  //   db.query("insert into users (name, email, password_hash) values(?,?,?)", [name,email,password_hash], (err,results)=>{
  //         if(err){
  //             console.log(err)
  //             res.send(err)
  //         }
  //         if(results.length > 0 ){
  //             res.status(401).json({message: "this event is already exist"})
  //         }
  //     })
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  console.log("this is working");
  res.send(req.params);
});

export default router;
