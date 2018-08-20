import React from 'react';
import MyFeed from './MyFeed';
import {connect} from 'react-redux';
require('../Styles/MyRequest.web.css')
class MyRequests extends React.Component{

    constructor(props){
        super(props);

        this.state={
            openViewReply : 0,
            ViewReply_Content :''
        }
    }
    componentDidMount(){
       // console.log(this.props.LoginReducer.UserId)
       this.props.LoginReducer.isAuthenticated == 'true' ?
       this.props.PageHitReducer['VISITED_MYREQUESTS'] == 0?
        fetch('/MyRequests_Data',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(this.props.LoginReducer)
        }).then(res=>res.json()).then(data=>{
            //console.log('got it :',data)
            this.props.SENT_REQUESTS(data);
        }).catch(error=>error):null
        :null
    }
    ViewReply = (check,event) =>{
        console.log('ViewReply called',event);
        this.setState({
            openViewReply : 1,
            ViewReply_Content:event
        })
    }

    render(){
        console.log(this.props.SentRequestReducer.postdetails)
        var myposts;
        this.props.SentRequestReducer.postdetails ?
        myposts = this.props.SentRequestReducer.postdetails.map((value)=>{
            return <MyFeed data={value} clickhandler={this.ViewReply}/>
        }):null

        return(
            <div className='MyPostDiv'>
                {myposts}
                <div className={['ViewReplies_Div',this.state.openViewReply==1?'open' : 'close'].join(' ')}>
                    <div className='ViewReplies_Header'>
                        <span>View  Replies</span>
                        <button><img style={{width:'15px',height:'15px'}} src='/assets/images/close.png'/></button>
                    </div>
                    <div className='ViewReplies_Content'>
                        {this.state.ViewReply_Content}
                    </div>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        PageHitReducer : state.PageHitReducer,
        LoginReducer : state.LoginReducer,
        SentRequestReducer : state.SentRequestReducer
    }
}

function matchDispatchToProps(dispatch){
    return {
        SENT_REQUESTS : (data) => dispatch({type:'SENT_REQUESTS',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(MyRequests);