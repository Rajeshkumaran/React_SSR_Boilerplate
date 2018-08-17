import React from 'react';
import MyFeed from './MyFeed';
import {connect} from 'react-redux';
class MyRequests extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        // var items;
        // this.props.SentRequestReducer ? {
        //  items =  this.props.SentRequestReducer.map((value)=>{
        //         return <MyFeed data={value}/>
        //     })
        // } : null

        return(
            <div>
                MyRequests
            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        SentRequestReducer : state.SentRequestReducer
    }
}
export default connect(mapStateToProps)(MyRequests);