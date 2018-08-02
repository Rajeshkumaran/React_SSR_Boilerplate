import React from 'react';
import FeedSubComponent from './Feed_SubComponent';
import {connect} from 'react-redux';
class Feeds extends React.Component{

    constructor(props)
    {
        super(props);
    }
    render(){
        console.log('feeds1',this.props);
        const items = this.props.MainReducer.map((feed)=>{

            return <FeedSubComponent key={feed.UserId} data={feed}/>


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
export default connect(mapStateToProps)(Feeds);