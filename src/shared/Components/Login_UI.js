import React from 'react';
import {connect} from 'react-redux';
require('../Styles/login.web.css')
class LoginUI extends React.Component {

   

    Close = ()=>{
    //    window.location.href = this.props.PageHitReducer.CURRENT_LOCATION
       this.props.history.goBack();

    }

    render() {

        return (
            <div id='LoginContainer'>
                <div id='LoginCloseDiv'>
                    <button id='LoginClose' onClick = {this.Close}>&#x2716;</button>
                </div>
                <br/>
                <div id='LoginDiv'>

                    <form id='LoginForm'>
                        <img src="/assets/images/s_logo.png" id='LoginLogo' /><br />
                        <input type='text' placeholder='Username' id='Username' /><br />
                        <input type='text' placeholder='password' id='password' /><br />
                        <button id='LoginButton' >Login</button><br />
                        <button id='SignupButton'>Signup</button>
                    </form>

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