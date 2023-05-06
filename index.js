let  express =require("express");
const { connection } = require("./config/db");
const { noticeRoute } = require("./routes/notice.route");
const { Noticemodel } = require("./models/notice.model");
let app = express();
require("dotenv").config();
app.use(express.json());
app.use("/notice",noticeRoute)
app.get("/",async(req,res)=>{
  res.send("hello this is mock-server-11")
})

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("server is running")
})