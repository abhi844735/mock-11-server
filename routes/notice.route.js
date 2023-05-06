const express=require("express");
const { Noticemodel } = require("../models/notice.model");
const app = express();
const noticeRoute=express.Router();
app.use(express.json());

// post api for notice;
noticeRoute.post("/addNotice",async(req,res)=>{
    try {
        // console.log(req.body)
        let notice_data= await new Noticemodel(req.body);
        await notice_data.save();
        res.send({message:"notice added successfully"})
    } catch (error) {
        res.send({error:error.message})
    }
})

//// view all notice api
noticeRoute.get("/",async(req,res)=>{
    try {
        let data = await Noticemodel.find();
        res.send({allNotice:data});
    } catch (error) {
        res.send({error:error.message})
    }
})

//// edit any notice via Id api
noticeRoute.patch("/:id",async(req,res)=>{
    try {
        await Noticemodel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.send({message:"notice updated successfully"});
    } catch (error) {
        res.send({error:error.message})
    }
})

noticeRoute.delete("/:id",async(req,res)=>{
    try {
        await Noticemodel.findByIdAndDelete(req.params.id);
        res.send({message:"notice deleted successfully"});
    } catch (error) {
        res.send({message:error.message})
    }
})
module.exports={noticeRoute}