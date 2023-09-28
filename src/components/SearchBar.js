import React from "react";

const SearchBar = ({ location, setLocation, handleSearchLocation }) =>
    <div className="search-bar">
        <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    console.log(event)
                    handleSearchLocation(event);
                }
            }}
            placeholder="Enter Location"
            type="text"
        />
    </div>


export default SearchBar;