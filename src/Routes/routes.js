
const routes = [
{
    path:'/Home',
    actiontype:'HOME_REQUEST',
    pagehit_action:'/HOME',
    fetch_Page:(UserId)=>fetch('http://localhost:1337/postdetails').then(response=>response.json()).catch((error)=>console.log(error))
},
{
    path:'/About',
    actiontype:'ABOUT_REQUEST',
    pagehit_action:'/ABOUT',
    fetch_Page:(UserId)=>fetch('http://localhost:1337/aboutpagedata').then(response=>response.json()).catch((error)=>console.log(error))
    
},
{
    path: '/Login',
    actiontype:'SENT_REQUESTS',
    fetch_Page:(UserId)=>{
        if(UserId)
        return fetch('http://localhost:1337/postdetails/?userinfo='+UserId).then(response=>response.json()).catch((error)=>console.log(error))
        else
        {
           return new Promise(resolve=>{
                resolve([])
            })
        }    
    },
    pagehit_action:'/LOGIN',


},
{
    path: '/MyRequests',
    actiontype:'SENT_REQUESTS',
    pagehit_action:'/MYREQUESTS',
    fetch_Page:(UserId)=>{
        if(UserId)
        return fetch('http://localhost:1337/postdetails/?userinfo='+UserId).then(response=>response.json()).catch((error)=>console.log(error))
        else
        {
           return new Promise(resolve=>{
                resolve([])
            })
        }    
    }

},
]
export default routes;