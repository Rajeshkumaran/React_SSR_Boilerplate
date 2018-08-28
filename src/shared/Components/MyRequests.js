import React from 'react';
import MyFeed from './MyFeed';
import { connect } from 'react-redux';
require('../Styles/MyRequest.web.css')
class MyRequests extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openViewReply: 0,
            ViewReply_Content: ''
        }
    }
    componentDidMount() {
        // console.log(this.props.LoginReducer.UserId)
        this.props.LoginReducer.isAuthenticated == true ?
            console.log('Component Did mount in MyRequests called ... already logged in')
            : (

                console.log('Component Did mount in MyRequests called ... not logged in')
            )

        this.props.LoginReducer.isAuthenticated == true ? (
            this.props.SentRequestReducer.length == 0 ?
                fetch('http://localhost:3010/MyRequests_Data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({UserId:this.props.LoginReducer.UserId})
                }).then(res => res.json()).then(data => {
                    console.log('Data in MyRequests.js Component Did Mount', data);
                    this.props.SENT_REQUESTS(data);
                    console.log('Sent_Requests called in Myrequest.js component did mount');
                }).catch(err => console.log(err)) : null
        ) : null


    }
    ViewReply = (check, event) => {
        console.log('ViewReply called', event);
        this.setState({
            openViewReply: 1,
            ViewReply_Content: event
        })
    }

    Close = () => {
        this.setState({
            openViewReply: 0
        })
    }

    render() {
        console.log(this.props.SentRequestReducer)
        var myposts;
        this.props.SentRequestReducer.length == 0 ? myposts = <div>{"You didn't posted any request yet"}</div> :
            myposts = this.props.SentRequestReducer.map((value) => {
                return <MyFeed data={value} clickhandler={this.ViewReply} />
            })


        var replies = null;
        this.state.ViewReply_Content ?
            replies = this.state.ViewReply_Content.replies.length == 0 ? <div>No replies</div>
                : this.state.ViewReply_Content.replies.map((reply) => {
                    console.log("inside reply : ", reply)
                    return <div className='ViewReplies_IndividualReplyContent'>
                        <div style={{ width: '30px', height: '30px', display: 'inline-block', border: '1px solid black' }}><img style={{ width: '27px', height: '27px' }} src='https://ssl.gstatic.com/s2/profiles/images/silhouette96.png' /></div>
                        <div style={{ 'font-size': '11px', left: '2px', top: '-15px', display: 'inline', position: 'relative' }}>{reply.SenderName}</div>
                        <div style={{ color: '#989ca5', display: 'inline', 'font-size': '11px', 'position': 'relative', left: '-30px' }}>{reply.ReplyDate}</div>
                        <div className='ViewReplies_RepliesContentDiv'>{reply.ReplyContent}</div>
                        <div style={{ padding: '15px' }}>https://localhost:3010/filename</div>
                    </div>


                }) : console.warn('No View Reply Content : in MyRequest.js')

        // console.log('ViewReply_Content : ',this.state.ViewReply_Content)

        return (
            <div className='MyPostDiv'>
                {myposts}
                <div className={['ViewReplies_Div', this.state.openViewReply == 1 ? 'open' : 'close'].join(' ')}>
                    <div className='ViewReplies_Header'>
                        <span style={{ color: 'blue' }}>View  Replies</span>
                        <button className='ViewReplies_CloseButton' onClick={this.Close}><img style={{ width: '15px', height: '15px' }} src='/assets/images/close.png' /></button>
                    </div>
                    <div className='ViewReplies_MyPostDiv'>
                        <div className='ViewReplies_MyPostDateDiv'>{this.state.ViewReply_Content.PostDate}</div>
                        <div className='ViewReplies_MyPostContentDiv'>{this.state.ViewReply_Content.PostContent}</div>

                    </div>
                    <div className='ViewReplies_RepliesDiv'>
                        <div className='ViewReplies_RepliesTitle'>
                            Replies
                        </div>
                        <div className='ViewReplies_RepliesContent'>
                            {replies}
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        PageHitReducer: state.PageHitReducer,
        LoginReducer: state.LoginReducer,
        SentRequestReducer: state.SentRequestReducer
    }
}

function matchDispatchToProps(dispatch) {
    return {
        SENT_REQUESTS: (data) => dispatch({ type: 'SENT_REQUESTS', payload: data })
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(MyRequests);