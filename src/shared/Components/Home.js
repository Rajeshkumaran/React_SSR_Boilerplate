import React from 'react';
import {connect} from 'react-redux';
require('./home.css')
var d;
class Home extends React.Component{

    constructor(props){
        super(props);
    }
    // componentWillMount(){

    //       fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>response.json()).then(data=>console.log(data));

    // }

   

    render(){
        console.log('home called.....')
        console.log(this.props.MainReducer)
        this.props.MainReducer.map((val)=>{
            d=val['Product'];
            console.log(val['Product'])
        })
        return(
            <div id='home'>This is Home page{d}</div>
        );
    }


}
function mapStateToProps(state){
    return {
        MainReducer : state.MainReducer
    }
}
export default connect(mapStateToProps)(Home);