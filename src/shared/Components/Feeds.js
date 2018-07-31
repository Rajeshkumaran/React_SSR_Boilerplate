import React from 'react';
import {connect} from 'react-redux';
require('./Feeds.css')
class Feeds extends React.Component{

    constructor(props){
        super(props);
        this.Reply=this.Reply.bind(this);
    }
    Reply = (DivId) =>{
        console.log(' Reply clicked ')
        console.log(DivId);
         document.getElementById('FeedResponseShow'+DivId).style.display='block';
    }

    render(){
        console.log('At feed.js '+this.props.MainReducer)
        
        const feed_listitem = this.props.MainReducer.map((feed)=>{
           return <div className='FeedDisplay' key={feed.Userid}>
           <div className='FeedRequestDiv'>
            {feed.Request}
            <button className='FeedReplyButton' onClick={()=>this.Reply(feed.Userid)}><img style={{width:'20px'}} src='/assets/images/reply.png'/></button>
            </div>
            <div className='FeedResponseDiv' id={'FeedResponseShow'+feed.Userid}>
            
                <div className='FeedSubmissionDiv'>
                <textarea></textarea>
                <input type='file'/>
                <button>Submit</button>
                </div>
            </div> 
            </div>
        })

        return(
            <div>
            
                {feed_listitem}

            </div>             
        )
    }

}
function mapStateToProps(state){
    return {
        MainReducer : state.MainReducer,
        PageHitReducer : state.PageHitReducer
    }
}
export default connect(mapStateToProps)(Feeds);