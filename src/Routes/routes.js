import Home from '../shared/Components/Home'
import About from '../shared/Components/About_us'
import fetch from 'isomorphic-fetch';
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
    
}
]
export default routes;