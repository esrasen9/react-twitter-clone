import React from 'react';
import SearchIcon from "@mui/icons-material/Search";

const SearchTwitter = () =>  {
    return (
        <div className="widgets-search-input">
            <SearchIcon className="widget-search-icon"/>
            <input placeholder="Search Twitter" type="text"/>
        </div>
    );
}

export default SearchTwitter;