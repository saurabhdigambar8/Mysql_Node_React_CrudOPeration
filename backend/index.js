import  express  from "express";
// const express=require("express")
import mysql from "mysql";
const app=express()

const db=mysql.createConnection({
 host:"localhost",
 password:"root",
 user:"root",
 database:"test"
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_nativ_password BY 'root'

app.get("/",(r,s)=>{
  s.send("responce from server")
})
app.get("/books",(req,res)=>{
    const q= "SELECT * FROM BOOKS"
    db.query(q,(err,data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
})

app.listen(4000,()=>{
    console.log("server listning on port 4000");
})