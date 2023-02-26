let express=require("express")
const { Fetchusers,DeleteAll,Getusers } = require("../controller/user.controller")
let app=express.Router()
app.get("/fetch",Fetchusers)
app.delete("/all",DeleteAll)
app.get("/",Getusers)

module.exports=app