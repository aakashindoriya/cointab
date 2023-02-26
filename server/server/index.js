require("dotenv").config()
const express=require("express")
const app=express()
const cors=require("cors")
const  connect  = require("./config/connectbd")
const userRoute=require("./route/user.routes")
app.get("/",(req,res)=>{
    res.status(200).send("welcome to cointab")
})
app.use(cors())
app.use(express.json())

app.use("/users",userRoute)

app.listen(process.env.PORT||3000,async()=>{
    await connect()
    console.log("server started at port 8080")
})
