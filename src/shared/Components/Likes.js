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
        this.setState({
            active : 0
        })
        setTimeout(()=>{
            this.props.history.goBack();
       },500)
        }
    render() {

        console.log(this.state.active)

        return (
            this.state.active == 1 ?
                <div>
                    <div className='OverlayDiv' onClick={this.Close}></div>
                    <div className='LikeTabDiv-active'>
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
                :
                
                <div>
                <div className='OverlayDiv' onClick={this.Close}></div>
                <div className='LikeTabDiv-inactive'>
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