const express = require('express');
const app = express();
var Data=[

    {
        "Username":"Sai",
        "Userid":1,
        "Request":'Can you send this image?'
    },
    {
        "Username":"Bike1",
        "Userid":2,
        "Request":'Can you Answer for this question?'
    },
    {
        "Username":"Bike1",
        "Userid":3,
        "Request":'Can you send this song?'
    }

]
app.get('/api/homepage',(req,res)=>{
    res.send(Data);
})
app.listen(3011,()=>console.log('Listening on port 3011 ---> HomePage data'));