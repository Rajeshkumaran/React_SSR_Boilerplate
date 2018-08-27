import React from 'react';
require('../Styles/Loader.web.css');

class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current_item : 0,
            change : 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState((prevState)=>({
                change : prevState.change ==0 ? 1 :0
            
            }))
         },500)
    }
    render(){
        const items = [1,1,1,1].map((value,index)=>{
            return  <li className={['Loader_Individual',this.state.current_item==index?'activeLoader':null].join(' ')}></li>
                       
        })
        return(
            <div>
                <div className='Loader_OverlayDiv'></div>
                <div className='Loader_Circle'>
                <span className={['Loader_line', this.state.change == 0 ? 'moveleft' : 'reverseleft'].join(' ')}></span>
                <span className={['Loader_Square', this.state.change == 1 ? 'bounce' : 'reversebounce'].join(' ')}></span>
                <span className={['Loader_line', this.state.change == 0 ? 'moveright' : 'reverseright'].join(' ')}></span>
                </div>
            </div>
        )
    }
}

export default Loader;