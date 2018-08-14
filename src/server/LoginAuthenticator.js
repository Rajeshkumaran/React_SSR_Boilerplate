const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var fetch = require('isomorphic-fetch');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post('/LoginAuthenticator',(req,res)=>{
    console.log(req.body.Username)


        fetch(`http://localhost:1337/logindetails?MailId=${req.body.mailId}`)
        .then(response=>response.json())
        .then(data=>{
            console.log('Credentials',data);
            if(data.length != 0)
            {
                req.body.Password == data[0].Password ? res.send({Authenticated : true})
            :res.send({Authenticated : false});
            }
            else{
                res.send({Authenticated : false});
            }
    
        }).catch(e=>console.log('error while  retreving data from strapi in login authenticator'))
      

 
})
app.listen(3015,()=>{console.log('Listening on port 3015')})