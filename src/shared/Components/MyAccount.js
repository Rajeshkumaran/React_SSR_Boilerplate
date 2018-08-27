import React from 'react';
import {connect} from 'react-redux';
import Loader  from './Loader';
require('../Styles/MyAccount.web.css');
class MyAccount extends React.Component {
    Logout = () =>{

        fetch('/Logout').then(res=>res).then(data=>console.log('After Logout data : ',data)).catch(err=>console.warn('IN Logout call in MyAccount component : ',err));
        this.props.LOGOUT({isAuthenticated:false,UsedId:null})
        this.props.SENT_REQUESTS([])
    }
    componentDidMount(){
        this.props.LoginReducer.isAuthenticated ==true ? 
       setTimeout(()=>{
       
        (fetch('http://localhost:3010/PersonalInfo_Request',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({UserId:this.props.LoginReducer.UserId})

        }).then(res=>res.json()).then(data=>{
            console.log('In Component Will mount in Login_UI component  ',data);
                this.props.PERSONAL_INFO(data);
        }).catch(err=>console.log(err)))


       },2000)
       
        :null
    }
    render() {
        console.log("My account page data",this.props)
        return (
            !this.props.PersonalInfoReducer["0"] ? <Loader/> :
            <div>
               
                <aside className='MyAccount_Aside'>
                    <div className='MyAccount_Header'>
                        <img className='MyAccount_HeaderDp' src='https://orig00.deviantart.net/4eb0/f/2015/067/6/3/new_profile_fb_by_skullki4-d8kzbs4.jpg' />
                        <div className='MyAccount_HeaderProfileName'>{this.props.PersonalInfoReducer["0"].UserName}</div>

                    </div>
                    <div className='MyAccount_Followers'>
                        <span className='MyAccount_FollowersSpan'>
                            <div className='MyAccount_FollowersCount'>
                                <span>1k</span>
                            </div>
                            <div>Friends</div>
                        </span>
                        <span className='MyAccount_FollowersSpan'>
                            <div className='MyAccount_FollowersCount'>
                                <span>1k</span>
                            </div>
                            <div>Followers</div>
                        </span>
                        <span className='MyAccount_FollowersSpan'>
                            <div className='MyAccount_FollowersCount'>
                                <span>13.2M</span>
                            </div>
                            <div>Following</div>
                        </span>
                    </div>
                    <div className='MyAccount_AdditionalInfoDiv'>

                        <span>Friends</span>
                        <div className='MyAccount_Line'></div>
                        <span>My Requests</span>
                        <div className='MyAccount_Line'></div>
                        <span onClick={this.Logout}>Log out</span>


                    </div>
                </aside>
                <section className='MyAccount_ProfileDetails'>
                    <div className='MyAccount_ProfileDetails_Title'>
                    <span>Profile</span><span className='MyAccount_ProfileDetails_SaveChangesButton'>Save Changes</span></div>
                    <div className='MyAccount_ProfileDetails_Content'>
                        <div className='MyAccount_Profile_IndividualDiv'>
                            <span className='MyAccount_Profile_IndividualTitle'>Name : </span>
                            <span className='MyAccount_Profile_IndividualData' contentEditable='true'>{this.props.PersonalInfoReducer["0"].UserName}</span>
                        </div>
                        <div className='MyAccount_Profile_IndividualDiv'>
                            <span className='MyAccount_Profile_IndividualTitle'>Date of Birth : </span>
                            <span className='MyAccount_Profile_IndividualData'>{this.props.PersonalInfoReducer["0"].DateOfBirth}</span>
                        </div>
                        <div className='MyAccount_Profile_IndividualDiv'>
                            <span className='MyAccount_Profile_IndividualTitle'>Mobile Number : </span>
                            <span className='MyAccount_Profile_IndividualData'>{this.props.PersonalInfoReducer["0"].MobileNumber}</span>
                        </div>
                    </div>
                </section>
                
            </div>
            

        )
    }
}
function mapStateToProps(state){
    return {
        LoginReducer : state.LoginReducer,
        PersonalInfoReducer: state.PersonalInfoReducer
    }
}
function matchDispatchToProps(dispatch){
    return{
        LOGOUT : (data) => dispatch({type:'LOGIN_AUTHENTICATION',payload:data}),
        SENT_REQUESTS : (data) =>dispatch({type:'SENT_REQUESTS',payload:data}),
        PERSONAL_INFO : (data)=>dispatch({type:'PERSONAL_INFO',payload:data})
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(MyAccount);