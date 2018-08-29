import React from 'react';
require('../Styles/Search.web.css');
class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchText : '',
            searchResults : ''
        }
    }
    onChangeHandler = (event) =>{
        var value = event.target.value;

        fetch('http://localhost:3010/Search',{
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({UserName : value})
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                searchResults : data
            })
            console.log('Search Results : ',data,this.state.searchResults)
        })
        .catch(error=>console.log(error));

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
        .then(data=>{
            this.setState({
                searchResults : data
            })
            console.log('Search Results : ',data,this.state.searchResults)
        })
        .catch(error=>console.log(error));
    }

    render(){
    
        const SearchResults = this.state.searchResults ? this.state.searchResults.map((result)=>{
            return <li className='SearchResult_IndividualItem'>
                <span><img style={{width:'20px',height:'20px'}} src={result.ProfilePicture}/></span>
                <span>{result.UserName}</span>
            </li>
        }) : null

    return(
    <div id='SearchComponent_Div'>

        <div id='Searchbar'>
            <span className='Searchbar_span searchInput'>
            <input type='text' placeholder='search for  Friends' style={{'font-size':'20px',width:'100%',height:'100%',border:'1px solid transparent'}} onChange={this.onChangeHandler} value={this.state.searchText}/>
            </span>
            <span className='Searchbar_span searchIcon' onClick={this.searchHandler}>
            <img src='/assets/images/search.png'/>           
            </span>
        </div>
        <div className='SearchListsDiv'>
            {SearchResults}
        </div>


    </div>
        
    )
    }

}
export default Search;