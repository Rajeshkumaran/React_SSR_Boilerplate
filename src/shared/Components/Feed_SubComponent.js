import React from 'react';
import { connect } from 'react-redux';

class FeedSubComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: 0,
            textareaContent: '',
            clear: 0
        }

    }


    Reply = () => {
        this.setState((prevState) => ({
            open: prevState.open == 0 ? 1 : 0
        })
        )
        console.log('Reply clicked ...' + this.state.open)
    }

    Clear = () => {


        console.log('Clear called' + this.props.data.ReceiverId, this.props.data.PostId);
        this.setState({
            clear: 1
        })

    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate in Feed sub component')
        if (this.state.clear == 1) {
            var data = [this.props.data.ReceiverId, this.props.data.PostId]
            setTimeout(() => {
                this.props.ClearFeed(data)
                // var url = 'http://localhost:1337/homepagedata/'+this.props.data._id;
                // var postdata = {
                //     Show:false
                // }
    
                // fetch(url, {
                //     method: 'PUT',
                //     headers: {
                //         "Content-Type": "application/json; charset=utf-8",
                //         // "Content-Type": "application/x-www-form-urlencoded",
                //     }, // 'GET', 'PUT', 'DELETE', etc.
                //     body: JSON.stringify(postdata) // Coordinate the body type with 'Content-Type'
                   
                // }).then(res => res.json())
                //     .then(response => console.log('Success:', response))
                //     .catch(error => console.error('Error:', error));
    
    
            }, 400)


           

        }
    }

    ContentHandler = (event) => {
        console.log('contentHandler called !!!', event.target.value);
        var value = event.target.value;
        this.setState({
            textareaContent: value
        })
    }

    Send = () => {
        console.log('Send clicked !!!', this.state.textareaContent);

        var url = 'http://localhost:1337/homepagedata/'+this.props.data._id;
        var postdata = {
            Replies:
                [{
                    SenderId:'101',
                    Post : this.state.textareaContent
                }],
                          

        }
        postdata.ReplyCount = postdata.Replies.length;

        fetch(url, {
            method: 'PUT', // or 'PUT'
             // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postdata),
        }).then(res => res.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));

    }

    render() {
        var style = this.state.open == 1 ? { display: 'inline-block' } : { display: 'none' }
        console.log('feed sub component', this.props.data)
        return (
            <div className={this.state.clear == 0 ? 'FeedDisplay' : 'FeedDisplay-clear'} >
                <div className='UserDetailsDiv'>
                    <img className='ProfilePictureDisplay' src={this.props.data.ProfilePicture} style={{ width: '30px', height: '30px' }} />
                    <span className='UsernameSpan'>{this.props.data.ReceiverName}</span>
                    <span className='PostDateSpan'>posted @{this.props.data.PostDate}</span>
                    <button className='ClearButton' onClick={this.Clear}>Clear</button>
                </div>
                <div className='FeedRequestDiv'>
                    {this.props.data.Request}
                    <button className='FeedReplyButton' onClick={this.Reply}><img style={{ width: '20px' }} src='/assets/images/reply.svg' /></button>
                    <label className='AttachmentButton'>
                        <span className='AttachmentButton_Img'><img src='/assets/images/attachments.svg' style={{ width: '20px' }} /></span>
                        <span className='AttachmentButton_UploadFile'><input type='file' /></span>
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

function mapStateToProps(state) {
    return {
        MainReducer: state.MainReducer,
        PageHitReducer: state.PageHitReducer
    }

}
function matchDispatchToProps(dispatch) {
    return {
        ClearFeed: (data) => dispatch({ type: 'CLEAR_FEED', payload: data })
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(FeedSubComponent);