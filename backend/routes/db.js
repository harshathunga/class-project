import mysql2 from "mysql2";

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "advance_dev",
    
})

db.connect((err)=> {
    if(err){
        console.log(err)
    }else{
        console.log(' connected')
    }
})


export default db;