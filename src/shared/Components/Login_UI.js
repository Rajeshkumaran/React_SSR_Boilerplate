import React from 'react';
import {connect} from 'react-redux';
require('../Styles/login.web.css')
class LoginUI extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            active : 1,
            mailId: '',
            Password : ''
        }
    }

   Listener = (event)=>{
       console.log(event.target.value);
       event.target.name == 'mailId'?
        this.setState({
            mailId:event.target.value
        })
        :
        this.setState({
            Password:event.target.value
        })

    }
   

    Close = ()=>{
    
      this.setState({
          active : 0
      })
  

    }
    componentDidUpdate(){
        
        this.state.active ==0 ? setTimeout(()=>this.props.history.goBack(),400 ): console.log('Component Did Update called ',this.state.active)
    }
    Login = ()=>{

        fetch('http://localhost:3010/LoginAuthenticate?mailId='+this.state.mailId+'&Password='+this.state.Password
        ,{
            method: 'GET', // or 'PUT'
           
       })
        .then(res => res.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));


    }

    render() {

        return (

            <div className={this.state.active==1?'LoginContainer-active':'LoginContainer-inactive'}>
                <div id='LoginCloseDiv'>
                    <button id='LoginClose' onClick = {this.Close}>&#x2716;</button>
                </div>
                <br/>
                <div id='LoginDiv'>

                    <div id='LoginForm'>
                        <img src="/assets/images/s_logo.png" id='LoginLogo' /><br />
                        <input type='text' placeholder='mailId' id='mailId' name='mailId' onChange={this.Listener}  value={this.state.mailId}/><br />
                        <input type='text' placeholder='password' id='password' name='Password' onChange={this.Listener} value={this.state.Password}/><br />
                        <button id='LoginButton' onClick={this.Login} >Login</button><br />
                        <button id='SignupButton'>Signup</button>
                    </div>

                </div>


            </div>
        )

    }




}
function mapStateToProps(state){
    return{
        MainReducer:state.MainReducer,
        PageHitReducer:state.PageHitReducer
    }
}
export default connect(mapStateToProps)(LoginUI);