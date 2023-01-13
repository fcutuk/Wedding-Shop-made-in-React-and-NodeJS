import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"1234",
        database:"ws",
    }
)

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello world")
})

app.get("/weddingAccessory", (req, res)=>{
    const q = "SELECT * FROM wedding_accessory"
    db.query(q,(err, data)=>{
        if(err) {
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})

app.get("/brideCrown", (req, res)=>{
    const q = "SELECT * FROM bridal_crown"
    db.query(q,(err, data)=>{
        if(err) {
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})
app.get("/hennaCrown", (req, res)=>{
    const q = "SELECT * FROM henna_crown"
    db.query(q,(err, data)=>{
        if(err) {
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})
app.get("/bridalAccesory", (req, res)=>{
    const q = "SELECT * FROM bridal_accessory"
    db.query(q,(err, data)=>{
        if(err) {
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})
app.get("/headPiece", (req, res)=>{
    const q = "SELECT * FROM head_piece"
    db.query(q,(err, data)=>{
        if(err) {
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})

app.get("/bridalBouquet", (req, res)=>{
    const q = "SELECT * FROM bridal_bouquet"
    db.query(q,(err, data)=>{
        if(err) {
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
})

// app.post("/weddingAccesory", (req, res)=>{
//     const q = "SELECT * FROM wedding_accessory"
//     db.query(q,(err, data)=>{
//         if(err) {
//             return res.json(err);
//         }
//         else{
//             return res.json(data);
//         }
//     })
// })

app.listen(5000, ()=>{console.log("Server running on port 5000")})