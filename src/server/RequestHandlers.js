const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var fetch = require('isomorphic-fetch');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post('/PersonalInfo_Handler',(req,res)=>{
    console.log('In PersonalInfo_Handler ',req.body)
    fetch('http://localhost:1337/userprivacy/?UserId='+req.body.UserId)
    .then(response => response.json())
    .then((data)=>{
        console.log('Inside PersonalInfo_Handler ',data[0]);
        res.send(data[0]);
    }).catch((error)=>{
        console.log('Error in Inside PersonalInfo_Handler',error);
    })
})
app.post('/MyRequests_DataHandler',(req,res)=>{

    console.log('In MyRequest_DataHandler ',req.body)
    fetch('http://localhost:1337/postdetails/?userinfo='+req.body.UserId)
    .then(response => response.json())
    .then((data)=>{
        console.log('Inside MyRequest_DataHandler ',data);
        res.send(data);
    }).catch((error)=>{
        console.log('Error in Inside MyRequest_DataHandler',error);
    })

})
app.post('/LoginAuthenticator', (req, res) => {

    fetch(`http://localhost:1337/userprivacy?MailId=${req.body.MailId}`)
        .then(response => response.json())
        .then(data => {
            console.log('Credentials', data);
            if (data.length != 0) {
                console.log('UserId : ', data[0].UserId)
                if (req.body.Password == data[0].Password) {
                    fetch('http://localhost:1337/postdetails/?userinfo='+data[0].UserId)
                    .then(res=>res.json())
                    .then((value)=>{
            
                        console.log(value)
                        // store.dispatch({type:'SENT_REQUESTS',payload:value[0].postdetails})
                        res.send({MailId:data[0].MailId, Authenticated: true,UserId:data[0].UserId,MyRequests : value})
                    }).catch((error)=>console.log("Error after login successful"))    
                
                }
                else { res.send({ Authenticated: false }); }
            }
            else {
                res.send({ Authenticated: false });
            }

        }).catch(e => console.log('error while  retreving data from strapi in login authenticator'))



})
app.post('/PostRequest_Handler',(req,res)=>{
    console.log('In PostRequest_Handler ',req.body)
    fetch('http://localhost:1337/postdetails',{
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(req.body)
    }).then(response => response.json()).then((data)=>{
        console.log('Inside PostRequest_Handler ',data);
        res.send({action : 'PostRequest_Done',
        status:'Success'
    });
    }).catch((error)=>{
        console.log('Error in Inside PostRequest_Handler',error);
    })
})




app.listen(3015, () => { console.log('Listening on port 3015') })