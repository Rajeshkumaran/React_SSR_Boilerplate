import React from 'react';
import {connect} from 'react-redux';

class FeedSubComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            open:0,
            textareaContent:''
        }
        
    }
    

    Reply = () =>{
        this.setState((prevState)=>({
            open: prevState.open == 0 ? 1 :0
        })
    )
        console.log('Reply clicked ...'+this.state.open)
    }
    
    Clear = ()=>{


        console.log('Clear called'+this.props.data.RecieverId,this.props.data.PostId);
        var data = [this.props.data.RecieverId,this.props.data.PostId];
       
        this.props.ClearFeed(data)
    }

    ContentHandler = (event) =>{
        console.log('contentHandler called !!!',event.target.value);
        var value = event.target.value;
        this.setState({
            textareaContent: value
        })
    }

    Send = () => {
        console.log('Send clicked !!!',this.state.textareaContent);

       var url='http://localhost:3011/api/homepage';
       var postdata = {
           RecieverId:this.props.data.RecieverId,
           PostId:this.props.data.PostId,
           PostReply:this.state.textareaContent,
           SenderId:"101"

       }

       fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(postdata), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
            }
            }).then(res => res.json())
              .then(response => console.log('Success:', response))
              .catch(error => console.error('Error:', error));   
      
    }
    
    render(){
        var style = this.state.open == 1 ? {display:'inline-block'} : {display : 'none'}
        return(
            <div className='FeedDisplay' >
           <div className='UserDetailsDiv'>
                <img className='ProfilePictureDisplay' src={this.props.data.Profile_Picture} style={{width:'30px',height:'30px'}}/>
                <span className='UsernameSpan'>{this.props.data.Recievername}</span>
                <span className='PostDateSpan'>Posted@{this.props.data.Post_Date}</span>
                <button className='ClearButton' onClick={this.Clear}>Clear</button>
           </div>
           <div className='FeedRequestDiv'>
            {this.props.data.Request}
            <button className='FeedReplyButton' onClick={this.Reply}><img style={{width:'20px'}} src='/assets/images/reply.svg'/></button>
            <label className='AttachmentButton'>
            <span className='AttachmentButton_Img'><img src='/assets/images/attachments.svg' style={{width:'20px'}}/></span>
            <span className='AttachmentButton_UploadFile'><input type='file'/></span>
            </label>
         

            </div>
            <div className='FeedResponseDiv' style={style}>
            
                 <div className='TextareaSpan'>
                    <textarea className='SubmitTextarea' onChange={this.ContentHandler} >{this.state.textareaContent}</textarea>
                </div>
                <div className='FileUploadSpan'>
                    <span className='FileName'>File :</span>
                    <span className='FileUploadProgressBar'></span>
                </div>
                <span className='SubmitButtonSpan'>
                <button className='SubmitButton' onClick={this.Send}>Send</button>
                </span>
                <span className='CancelButtonSpan'>
                <button className='CancelButton'>Cancel</button>
                </span> 
               
            </div> 
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
function matchDispatchToProps(dispatch){
    return {
        ClearFeed : (data) =>dispatch({type:'CLEAR_FEED',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(FeedSubComponent);