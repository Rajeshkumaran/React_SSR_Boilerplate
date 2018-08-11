import React from 'react';
import {connect} from 'react-redux';
require('../Styles/login.web.css')
class LoginUI extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            active : 1
        }
    }

   

    Close = ()=>{
    
      this.setState({
          active : 0
      })
  

    }
    componentDidUpdate(){
        
        this.state.active ==0 ? setTimeout(()=>this.props.history.goBack(),420 ): console.log('Component Did Update called ',this.state.active)
    }

    render() {

        return (

            <div className={this.state.active==1?'LoginContainer-active':'LoginContainer-inactive'}>
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