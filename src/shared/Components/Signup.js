import React from 'react';
class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state=
        {
            UserName : '',
            Password : '',
            MailId : '',
            DateOfBirth : '',
            MobileNumber : ''
        }
    }
    onChangeListener = (event)=>{

        var value;
        switch(event.target.name){
            case 'UserName':
                value= event.target.value;
                this.setState({
                    UserName : value
                });
                break;
            case 'Password':
                value= event.target.value;
                this.setState({
                    Password : value
                });
                break;
            case 'MailId':
                value= event.target.value;
                this.setState({
                    MailId : value
                });
                break;
            case 'MobileNumber':
                value= event.target.value;
                this.setState({
                    MobileNumber : value
                });
                break;
            case 'DateOfBirth':
                value= event.target.value;
                this.setState({
                    DateOfBirth : value
                });
                break;
        }
    }
    Submit = () =>{

       
        fetch('http://localhost:1337/userinfo',{

            method : 'POST',
            headers : {
                'Content-type':'application/json'
            },
            body:JSON.stringify({MailId:this.state.MailId})

        }).then(res=>res.json()).then(data=>{
            
            console.log('userinfo',data);
            this.StoreUserDetails(data);
        });

    }
    StoreUserDetails = (params) =>{
        console.log('StoreUserPrivacy called',this.state.MailId,this.state.UserName);
        var jsondata = {
                "UserName":this.state.UserName,
                "MailId":this.state.MailId,
                "MobileNumber":this.state.MobileNumber,
                "DateOfBirth":this.state.DateOfBirth,
                "Password":this.state.Password,
                'UserId':params._id
            }
            

        fetch('http://localhost:1337/userprivacy',{

            method : 'POST',
            headers : {
                'Content-type':'application/json'
            },
            body:JSON.stringify(jsondata)

        }).then(res=>res.json()).then(data=>{
            
            console.log(data);
            
        });

    }

    render(){
        return(
            <div>
                <div>
                    <input type='text' placeholder='enter your name' name='UserName' value={this.state.UserName} onChange={this.onChangeListener}/>
                    <input type='text' placeholder='enter your dob dd/mm/yyyy' name='DateOfBirth' value={this.state.DateOfBirth} onChange={this.onChangeListener}/>
                    <input type='text' placeholder='enter your password' name='Password' value={this.state.Password} onChange={this.onChangeListener}/>
                    <input type='mail' placeholder='enter your email' name='MailId' value={this.state.MailId} onChange={this.onChangeListener}/>
                    <input type='number' placeholder='enter your mobile number' name='MobileNumber' value={this.state.MobileNumber} onChange={this.onChangeListener}/>
                    <button onClick={this.Submit}>Submit</button>
                </div>
            </div>
        )
    }

}
export  default SignUp;