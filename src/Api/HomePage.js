const express = require('express');
const app = express();
var Data=[

    {
        "Product":"Bike1",
        "id":1,
        "Price":10000
    },
    {
        "Product":"Bike2",
        "id":2,
        "Price":10000
    },
    {
        "Product":"Bike3",
        "id":3,
        "Price":10000
    }

]
app.get('/api/homepage',(req,res)=>{
    res.send(Data);
})
app.listen(3011,()=>console.log('Listening on port 3011 ---> HomePage data'));