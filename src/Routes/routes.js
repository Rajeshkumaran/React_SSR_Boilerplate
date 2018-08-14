
const routes = [
{
    path:'/Home',
    actiontype:'HOME_REQUEST',
    fetch_Page:()=>fetch('http://localhost:1337/homepagedata').then(response=>response.json()).catch((error)=>console.log(error))
},
{
    path:'/About',
    actiontype:'ABOUT_REQUEST',
    fetch_Page:()=>fetch('http://localhost:1337/aboutpagedata').then(response=>response.json()).catch((error)=>console.log(error))
    
},
{
    path:'/LoginAuthenticate',
    actiontype:'LOGIN_AUTHENTICATION',
    fetch_Page:(params)=>{
        console.log('Params',params);
        return fetch('http://localhost:3015/LoginAuthenticator',{
            method:'POST',
            headers:{
                    'Content-Type': 'application/json'
            },   
                body: JSON.stringify(params),
            }
            )
            .then(response=>response.json())
            .catch((e)=>console.log('Error in Authentication'))
            
        }
}
]
export default routes;