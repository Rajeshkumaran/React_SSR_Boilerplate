const express = require('express');
const app = express();
var Data=[

    {
        "Product":"Bike4",
        "id":1,
        "Price":10000
    },
    {
        "Product":"Bike5",
        "id":2,
        "Price":10000
    },
    {
        "Product":"Bike6",
        "id":3,
        "Price":10000
    }

]
app.get('/api/aboutpage',(req,res)=>{
    res.send(Data);
})
app.listen(3013,()=>console.log('Listening on port 3013 ---> AboutPage data'));