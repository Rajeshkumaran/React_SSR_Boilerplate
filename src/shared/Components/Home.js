import React from 'react';
import Feeds from './Feeds';
import {connect} from 'react-redux';
require('./home.css')
var d;
class Home extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){

        console.log(this.props)
         this.props.PageHitReducer['HOME_REQUEST']==0? fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>response.json()).then(data=>console.log(data)):null

    }

   

    render(){
        console.log('home called.....')
        console.log(this.props.MainReducer)
        this.props.MainReducer.map((val)=>{
         
            console.log(val)
        })
        return(
            <div id='home'>
               <Feeds/>
            </div>

        );
    }


}
function mapStateToProps(state){
    return {
        MainReducer : state.MainReducer,
        PageHitReducer : state.PageHitReducer
    }
}
export default connect(mapStateToProps)(Home);