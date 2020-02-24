import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import { queryBuilder, queryStringToObject } from '../../utils/helpers'; 

import useQuery from '../../utils/hooks/useQuery'

function SearchBar() {
  const history = useHistory();
  const querySelector = useQuery();
  const currentQuery = querySelector.get("q");
  const [query, setQuery] = useState(currentQuery || '');

  const searchWithQuery = () => {
    const currentQuery = queryStringToObject(history.location.search);
    const newQuery = queryBuilder({
      ...currentQuery,
      page: 1,
      q: query
    })
    return history.push(`${history.location.pathname}${newQuery}`);
  }

  const onKeyPress = (event) => {
    if(event.which === 10 || event.which === 13) {
      return searchWithQuery();
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text" 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Nhập tên, mã sản phẩm" 
        className="search-bar__input"/>
      <div className="search-bar__icon" onClick={searchWithQuery}/>
    </div>
  )
}

export default SearchBar
