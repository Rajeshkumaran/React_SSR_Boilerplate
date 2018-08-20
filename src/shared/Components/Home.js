import React from 'react';
import Feeds from './Feeds';
import {connect} from 'react-redux';
import date from 'date-and-time';

require('../Styles/home.web.css')
var d;
class Home extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){

//        console.log("component did mount in Home",this.props)

         this.props.PageHitReducer['VISITED_HOME']==0 ? console.log('HOME VISITED :0') : console.log('HOME VISITED :1')  
             //      this.props.CURRENT_LOCATION(window.location.href);

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
      //  CURRENT_LOCATION : (data)=>dispatch({type:'CURRENT_LOCATION',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(Home);