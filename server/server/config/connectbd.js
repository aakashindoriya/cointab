let mongoose=require("mongoose")

let connect= async ()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.URL)
}

module.exports=connect