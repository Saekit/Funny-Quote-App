import React from 'react';

const SearchForm = (props) =>{

    return(
      <div className="searchbar">
        <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.changeHandler}/>
      </div>
    )
}
export default SearchForm;
