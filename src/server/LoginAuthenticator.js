const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var fetch = require('isomorphic-fetch');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post('/LoginAuthenticator', (req, res) => {
    


    fetch(`http://localhost:1337/userprivacy?MailId=${req.body.MailId}`)
        .then(response => response.json())
        .then(data => {
            console.log('Credentials', data);
            if (data.length != 0) {
                console.log('UserId : ', data[0].UserId)
                if (req.body.Password == data[0].Password) {
                    fetch('http://localhost:1337/userinfo/?_id='+data[0].UserId)
                    .then(res=>res.json())
                    .then((value)=>{
            
                        console.log(value)
                        // store.dispatch({type:'SENT_REQUESTS',payload:value[0].postdetails})
                        res.send({ Authenticated: true,MyRequests : value[0].postdetails})
                    }).catch((error)=>console.log("Error after login successful"))    
                
                }
                else { res.send({ Authenticated: false }); }
            }
            else {
                res.send({ Authenticated: false });
            }

        }).catch(e => console.log('error while  retreving data from strapi in login authenticator'))



})
app.listen(3015, () => { console.log('Listening on port 3015') })