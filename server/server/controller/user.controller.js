const User = require("../model/user.model")
const axios =require("axios")
const Fetchusers=(async (req,res)=>{
    try{
        let user=[]
        for(let i=1;i<=50;i++){
            let data=await axios.get("https://randomuser.me/api/")
            data=data.data.results
            user.push(...data)
        }
       let response= await User.insertMany(user)
        
        res.status(201).send(response)

    }catch(e){
        res.status(401).send(e.message)
    }
   
})


const DeleteAll=(async (req,res)=>{
    try{
       let response=await User.deleteMany()
       res.status(201).send(response)
    }catch(e){
        res.status(401).send(e.message)
    }
   
})

const Getusers=(async (req,res)=>{
    try{
        let { page,sort,order,limit,age,gender,nat } = req.query;
        let sorting={};
        let filtring={}
        if(gender&&gender!="all")filtring.gender=gender
        if(nat&&nat!="null")filtring.nat ={ $regex: new RegExp(nat, 'i') }
        
        if(!limit) limit = 10;
    if(!page) page = 1;
    if(sort&&order){
        if(order=="asc"){
            order=1
        }else if(order=="desc"){
            order=-1
        }
        sorting[sort]=order
    }
       let response=await User.find(filtring).sort(sorting).limit(limit * 1).skip((page - 1) * limit)
       res.status(201).send(response)
    }catch(e){
        res.status(401).send(e.message)
    }
   
})





module.exports={Fetchusers,DeleteAll,Getusers}