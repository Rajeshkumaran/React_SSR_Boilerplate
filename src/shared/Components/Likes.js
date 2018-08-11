import React from 'react';
require('../Styles/likes.web.css')
class Likes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
    }

    componentWillUnmount(){
        console.log('Component cleared ...')
    }
    Close = () => {
        this.state.active ==1?
        this.setState({
            active : 0
        }):null
        
        }
    componentDidUpdate(){
        this.state.active == 0 ? setTimeout(()=>{this.props.history.goBack()},400) : console.log('testing')
    }
    render() {

        console.log(this.state.active)

        return (
            
                <div>
                    <div className={this.state.active == 1 ?'OverlayDiv' :'OverlayDiv-hide'} onClick={this.Close}></div>
                    <div className={this.state.active ==1 ? 'LikeTabDiv-active' : 'LikeTabDiv-inactive'}>
                        <div className='LoveContainer'>
                            <div id='LoveContainer_Name' className='LoveCommonGrid'>
                                <span><img style={{ width: '20px', height: '20px', 'border-radius': '5px', position: 'relative', top: '2px', border: '1px solid black', 'box-shadow': '1px 1px 1px grey' }} src='/assets/images/heart.png' /></span>
                                <span>  Rajesh K</span>
                            </div>

                            <div className='line LoveCommonGrid' ></div>

                            <div id='LoveContainer_LoveCount' className='LoveCommonGrid'>
                                <span>Loves Count : </span>
                                <span>75000 <img style={{ width: '20px', height: '20px', position: 'relative', top: '4px' }} src='/assets/images/heart.png' /></span>

                            </div>

                            <div className='line LoveCommonGrid'></div>

                            <div id='LoveContainer_Followers' className='LoveCommonGrid'>
                                <span>Followers : </span>
                                <span>2.3M</span>
                            </div>

                            <div className='line LoveCommonGrid'></div>


                            <div id='LoveContainer_Following' className='LoveCommonGrid'>
                                <span>Following : </span>
                                <span>2k</span>
                            </div>

                            <div className='line LoveCommonGrid'></div>


                        </div>
                    </div>
                </div>
                
        )

    }




}
export default Likes;