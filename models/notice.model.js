const mongoose=require("mongoose");
const noticeSchema=mongoose.Schema({
    author_name:{type:String,required:true},
    notice_title:{type:String,required:true},
    notice_desc:{type:String,required:true},
    date:{type:String,required:true}
})
const Noticemodel=mongoose.model("notice",noticeSchema);
module.exports={Noticemodel}