import React from 'react';
class MyFeed extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='SentRequestsDiv'>

            <div className='SentRequest_PostContentDiv'>

            </div>
            <span className='SentRequest_line'></span>
            <div className='SentRequest_ControlsDiv'>
                <button>Edit</button>
                <button>View Replies</button>
            </div>
            <div className='SentRequest_ViewRepliesDiv'>

            </div>

        </div>
        
        )
    }

}
export default MyFeed;