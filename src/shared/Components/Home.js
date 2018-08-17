import React from 'react';
import Feeds from './Feeds';
import {connect} from 'react-redux';
require('../Styles/home.web.css')
var d;
class Home extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){

        console.log("component did mount in Home",this.props)

         this.props.PageHitReducer['HOME_REQUEST']==0? fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>response.json()).then(data=>console.log(data)):null
          this.props.CURRENT_LOCATION(window.location.href);

    }
    componentWillUnmount(){
        console.log('Home compoennt unmounted...',this.props);
    }

   

    render(){
        console.log('home called.....')
 
        return(
            <div id='home'>
                No new Feeds to display
            </div>

        );
    }


}
function mapStateToProps(state){
    return {
        MainReducer : state.MainReducer,
        PageHitReducer : state.PageHitReducer,
        LoginReducer : state.LoginReducer,
        SentRequestReducer : state.SentRequestReducer
    }
}
function matchDispatchToProps(dispatch){
    return{
        CURRENT_LOCATION : (data)=>dispatch({type:'CURRENT_LOCATION',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(Home);