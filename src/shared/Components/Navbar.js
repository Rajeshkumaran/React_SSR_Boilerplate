import React, { Component } from "react";
import {BrowserRouter,StaticRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Aboutus from './About_us';
import Login from './Login_UI';
import Requests from './Requests';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignUp from "./Signup";
import Search from './Search';
import MyRequests  from './MyRequests';
import PostRequest from './PostRequest';
require('../Styles/NavBar.web.css')

class Navbar extends React.Component {


    componentWillMount(){
        console.log('called',this.props);

    }

    componentDidMount(){
        console.log('nav bar component did mount called',this.props);

    }
    render() {
        console.log('navbar called in server',this.props)
      
        return (
            
                <div className='NavBar'>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Requests'>ReceivedRequests</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/MyRequests'>MyRequests</Link></li>
                        
                        <li><Link to='/Search'>Search</Link></li>
                        <li id='LoginLi'><Link to='/Login'><img style={{width:'16px',height:'16px',position:'relative',top:'3px'}} src='/assets/images/myaccount.png'/></Link></li>
                         <li title='Post a Request' id='PostRequest'><Link to='/PostRequest'><img style={{width:'20px',height:'20px',position:'relative'}} src='/assets/images/plus.png'/></Link></li>
                    </ul>
                    <div className='ComponentDisplay'>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Requests' component={Requests} />
                    <Route exact path='/About' component={Aboutus} />
                    <Route exactSignup path='/Login' component={Login}/>
                    <Route  exact path='/Signup' component={SignUp}/>
                    <Route exact path='/Search' component={Search}/>
                    <Route exact path='/MyRequests' component={MyRequests}/>
                    <Route exact path='/PostRequest' component={PostRequest}/>
                    </div>
                </div>
        
        
        )
    }
}
function mapStateToProps(state){

    return{
        MainReducer : state.MainReducer,
        PageHitReducer : state.PageHitReducer,
        LoginReducer : state.LoginReducer,
        SentRequestReducer : state.SentRequestReducer
    }

}
function matchDispatchToProps(dispatch){
    return{
   // CURRENT_LOCATION : (data)=>dispatch({type:'CURRENT_LOCATION',payload:data})
    }
}
export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Navbar));

