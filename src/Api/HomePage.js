const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
var Data=[

    {
        "Recievername":"Sai",
        "RecieverId":"1",
        "Request":'Can you send this image?',
        "Post_Date":'20 Jan 2018',
        "Profile_Picture":'https://www.eff.org/files/banner_library/coder-cat-2.png',
        "PostId":"001",
        "ReplyCount":0,
        "Replies":[]
    },
    {
        "Recievername":"Bike1",
        "RecieverId":"2",
        "Request":'Can you Answer for this question?',
        "Post_Date":'20 Mar 2018',
        "Profile_Picture":'https://cdn.dribbble.com/users/788099/screenshots/4135014/programming_kit8-net_1x.png',
        "PostId":"001",
        "ReplyCount":0,
        "Replies":[]
        
        

    },
    {
        "Recievername":"Bike1",
        "RecieverId":"3",
        "Request":'Can you send this song?',
        "Post_Date":'07 Dec 2018',
        "Profile_Picture":'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVP9CQz32fHA/v0/800x-1.jpg',
        "PostId":"001",
        "ReplyCount":0,
        "Replies":[]
    }

]
app.get('/api/homepage',(req,res)=>{
    res.send(Data);
})
app.post('/api/homepage',(req,res)=>{
    console.log('done....')
    Data.map((val)=>{

      
       
       if(val.RecieverId == req.body.RecieverId && val.PostId == req.body.PostId)
       {         
           val.Replies.push({
               SenderId:req.body.SenderId,
               PostReply:req.body.PostReply
           })
           val.ReplyCount+=1;

       }
       return val;
        
    })
    console.log(req.body)
    res.send(req.body)
})
app.listen(3011,()=>console.log('Listening on port 3011 ---> HomePage data'));