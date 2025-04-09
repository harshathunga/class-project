import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
const router = express.Router();
import bodyParser from "body-parser";

import mysql2 from "mysql2";
import dotenv from "dotenv";
// import login from "../.env"

dotenv.config({ path: "../.env" });
const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    // methods:["POST","GET"],

    credentials: true,
  })
);

export  const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "advance_dev",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  console.log("this is authenticate:---", token);

  if (!token) return res.status(401).json({ message: "unauthorised" });

  try {
    const decoded = jwt.verify(token, "harshavardhanthunga");
    req.userId = decoded.userId;

    console.log(req.userId);
    next();
  } catch (err) {
    res.status(401).json({ message: "invalid or token expired" });
  }
};

router.post("/data", authenticate, (req, res) => {
  console.log(req.body);
});

const verifyjwt = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("need token");
  } else {
    jwt.verify(token, "harshavardhanthunga", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "auth filed" });
      } else {
        req.id = decoded.id;

        console.log(req.id);
        next();
      }
    });
  }
};

router.get("/auth", verifyjwt, (req, res) => {
  res.send("authenticated");
});

router.post("/login", (req, res) => {
  const { email, password_hash } = req.body;

  db.query(
    "select * from users where email = ? and password_hash = ?",
    [email, password_hash],
    (err, data) => {
      if (err) return res.status(404).json({ message: "error login" });

      if (data.length === 0)
        res.status(404).json({ message: "user not found" });

      const user = data[0].id;
      console.log(user);
      const token = jwt.sign({ userId: data.id }, "harshavardhanthunga", {
        expiresIn: "1d",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000,
      });

      // req.session.user = data;
      res.json({
        message: "login suceesful",
        auth: true,
        token: token,
        results: data,
      });
      console.log({ auth: true, token: token, results: data });

      //     if (data.length === 0) {
      //         const name = data.name;
      //         // console.log("name", name)
      //         const token = jwt.sign({ name: },"our-jsonwebtoken-secret-key", { expiresIn: '1d' });
      //         console.log("name", token)
      //         // res.cookie("token", token)
      //         return res.json({ Status: "success" })
      //     } else {
      //         return res.json({ Message: "No Record exist" })
      //     }
    }
  );
  // res.send("hello this is users");
});

router.post("/register", (req, res) => {
  const { name, email, password_hash } = req.body;

  console.log(req.body.name, req.body.email, req.body.password_hash);
  // })

  db.query(
    "select email from users where email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
      }

      if (results.length > 0) {
        return res
          .status(401)
          .json({ Status: "fail", message: "Invalid email or password" });
      } else {
        return res.json({ message: "Login successful!", user: results[0] });
      }
    }
  );

  db.query(
    "insert into users (name, email, password_hash) values(?,?,?)",
    [name, email, password_hash],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: "posted" });
      }
    }
  );
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  console.log("this is working");
  res.send(req.params);
});

export default router;
