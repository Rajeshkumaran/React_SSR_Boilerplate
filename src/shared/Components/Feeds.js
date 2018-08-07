import React from 'react';
import FeedSubComponent from './Feed_SubComponent';
import {connect} from 'react-redux';
require('../Styles/Feeds.web.css')
class Feeds extends React.Component{

    constructor(props)
    {
        super(props);
    }
    componentDidMount(){
        console.log('component did mount in Feeds');
        this.props.CURRENT_LOCATION(window.location.href);

    }
    render(){
        console.log('feeds1',this.props);
        const items = this.props.MainReducer.map((feed)=>{
            if(feed.Show==1)
            return <FeedSubComponent className='FeedSubComponent' key={feed.UserId} data={feed}/>
            
        })
        return(
            <div>
                {items}
            </div>

        );
    }


}

function mapStateToProps(state){

    return{
        MainReducer : state.MainReducer,
        PageHitReducer : state.PageHitReducer
    }

}
function matchDispatchToProps(dispatch){
    return{
        CURRENT_LOCATION : (data)=>dispatch({type:'CURRENT_LOCATION',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(Feeds);