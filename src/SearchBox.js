import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input id = 'search-box' type = 'search' placeholder = 'search robots' onChange = {searchChange} />
        </div>
    )
}

export default SearchBox;