import React from 'react';
import {connect} from 'react-redux';
import  date from 'date-and-time';
require('../Styles/PostRequest.web.css');
class PostRequest extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            open : 1,
            Content : ''
        }
    }
    Close = () =>{

        this.setState({
            open : 0
        })
        setTimeout(()=>{
            this.props.history.goBack();
        },400)
    }
    onChangeListener = (event) =>{
        console.log(event.target.value)
        var val = event.target.value;
        this.setState({
            Content : val 
        })
    }
    Submit = () =>{
        var Now = new Date();
        var DateFormat = date.format(Now,'ddd DD/MM/YYYY HH:mm:ss');
     //   console.log('Date checking .....\nnew Date() :',new Date(),'\nDate.now() : ',Date.now()+24*60*60*5*1000,'new DAte().now() : ',Date.now())
        console.log(DateFormat)
        console.log('isAuthenticated : ',this.props.LoginReducer.isAuthenticated)
        if(this.props.LoginReducer.isAuthenticated == true)
        {
             if(this.props.LoginReducer.UserId){
                var  jsonData = {
                    PostDate : DateFormat,
                    PostContent : this.state.Content,
                    userinfo :{
                        _id : this.props.LoginReducer.UserId
                    } 
                }
               
                fetch('http://localhost:3010/PostRequest_Handle',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify(jsonData)
                })
                .then(response =>response.json())
                .then((data)=>{
                    console.log(data);
                })
                .catch(error=>error);
            }
            else{
                console.error('Error : UserId not defined in PostRequest.js')
            }
        }
    }

    render(){
        return(
            <div>
                <div id='PostRequest_OverlayDiv'></div>
                <div className={this.state.open == 1 ?'PostRequestDiv' : 'PostRequestDiv-Close'}>

                    <div id='PostRequest_TitleDiv'>
                        <span>Post a Request</span>
                        <button  id='PostRequest_CloseButton' onClick={this.Close}>
                        <img style={{width:'10px',height:'10px'}} src='/assets/images/close.png'/>
                        </button>
                    </div>
                    <div id='PostRequest_ContentDiv'>
                        <textarea id='PostRequest_textarea' onChange = {this.onChangeListener} value={this.state.Content} rows='5' cols='70'>

                        </textarea>
                    </div>
                    <div className='PostRequest_Controllers'>
                        <button id='PostRequest_SubmitButton' onClick={this.Submit}>Submit</button>
                        <button id='PostRequest_ClearButton'>Clear</button>
                    </div>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        LoginReducer : state.LoginReducer
    }
}
export default connect(mapStateToProps)(PostRequest);