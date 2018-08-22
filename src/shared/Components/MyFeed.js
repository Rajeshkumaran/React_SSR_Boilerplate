import React from 'react';
class MyFeed extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <div className='SentRequestsDiv'>

            <div className='SentRequest_PostDateDiv'>
                {this.props.data.PostDate}
            </div>
            <div className='SentRequest_PostContentDiv'>
                {this.props.data.PostContent}
            </div>
            <div className='SentRequest_ControlsDiv'>
                <button className='SentRequest_EditButton'>Edit</button>
                <button className='SentRequest_ViewReplyButton' onClick={this.props.clickhandler.bind(this,1,this.props.data)}>View Replies</button>
            </div>
            <div className='SentRequest_ViewRepliesDiv'>

            </div>

        </div>
        
        )
    }

}
export default MyFeed;