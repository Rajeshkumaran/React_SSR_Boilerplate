import React from 'react';
require('../Styles/Search.web.css');
class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchText : ''
        }
    }
    onChangeHandler = (event) =>{
        var value = event.target.value;
        this.setState({
            searchText : value
        })
    }

    searchHandler = () =>{
        fetch('http://localhost:3010/Search',{
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({UserName : this.state.searchText})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
    }

    render(){
    
   

    return(
    <div id='SearchComponent_Div'>

        <div id='Searchbar'>
            <span className='Searchbar_span searchInput'>
            <input type='text' style={{'font-size':'20px',width:'100%',height:'100%',border:'1px solid transparent'}} onChange={this.onChangeHandler} value={this.state.searchText}/>
            </span>
            <span className='Searchbar_span searchIcon' onClick={this.searchHandler}>
            <img src='/assets/images/search.png'/>           
            </span>
        </div>
        <div className='SearchListsDiv'>
            <li>SearchLists</li>
            <li>SearchLists</li>
            <li>SearchLists</li>
            <li>SearchLists</li>
            <li>SearchLists</li>
        </div>


    </div>
        
    )
    }

}
export default Search;