
const routes = [
{
    path:'/Home',
    actiontype:'HOME_REQUEST',
    pagehit_action:'/HOME',
    fetch_Page:()=>fetch('http://localhost:1337/postdetails').then(response=>response.json()).catch((error)=>console.log(error))
},
{
    path:'/About',
    actiontype:'ABOUT_REQUEST',
    pagehit_action:'/ABOUT',
    fetch_Page:()=>fetch('http://localhost:1337/aboutpagedata').then(response=>response.json()).catch((error)=>console.log(error))
    
},
{
    path: '/Login',
    actiontype:'LOGIN_REQUEST',
    fetch_Page:()=>fetch('http://localhost:1337/postdetails').then(response=>response.json()).catch((error)=>console.log(error))


},
{
    path: '/MyRequests',
    actiontype:'SENT_REQUESTS',
    pagehit_action:'/MYREQUESTS',
    fetch_Page:(params)=>fetch('http://localhost:1337/userinfo/'+params).then(response=>response.json()).catch((error)=>console.log(error))


},
]
export default routes;