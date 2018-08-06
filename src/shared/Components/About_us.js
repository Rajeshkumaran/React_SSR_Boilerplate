import React from 'react';
import {connect} from 'react-redux';
require('../Styles/about.web.css');
class AboutUs extends React.Component{


    componentDidMount(){

        console.log(this.props)
         this.props.PageHitReducer['ABOUT_REQUEST']==0? fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>response.json()).then(data=>console.log(data)):null
         this.props.CURRENT_LOCATION(window.location.href);
    }


    render(){
        return(
            <div id='about'>This is About us Page</div>
        );
    }

}
function mapStateToProps(state){
    return {
        MainReducer : state.MainReducer,
        PageHitReducer : state.PageHitReducer
    }
}
function matchDispatchToProps(dispatch){
    return{
        CURRENT_LOCATION : (data)=>dispatch({type:'CURRENT_LOCATION',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(AboutUs);