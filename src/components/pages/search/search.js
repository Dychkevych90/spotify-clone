import React from "react";

import SearchForm from "../../searchForm/searchForm";

const Search = () => {
  return (
    <div className={'content_page'}>
      <div className="fake_sidebar"/>
      <div className="search_content">
        <SearchForm/>
        {/*<div style={{color: '#fff', padding: '20px'}}>Search</div>*/}
      </div>
    </div>
  )
}

export default Search;