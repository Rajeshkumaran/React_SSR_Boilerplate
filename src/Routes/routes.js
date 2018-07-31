import Home from '../shared/Components/Home'
import About from '../shared/Components/About_us'
import fetch from 'isomorphic-fetch';
const routes = [
{
    path:'/Home',
    actiontype:'HOME_REQUEST',
    fetch_Page:()=>fetch('http://localhost:3011/api/homepage').then(response=>response.json()).catch((error)=>console.log(error))
},
{
    path:'/About',
    actiontype:'ABOUT_REQUEST',
    fetch_Page:()=>fetch('http://localhost:3013/api/aboutpage').then(response=>response.json()).catch((error)=>console.log(error))
    
}
]
export default routes;