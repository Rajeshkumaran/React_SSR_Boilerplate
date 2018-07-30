import React from 'react';
require('./home.css')
class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='home'>This is Home page</div>
        );
    }


}
export default Home;