import React from "react";

function Search( {searchPlant} ) {
  //passed through a function to be called back to get the value of the search
  function searchPlantChange(e) {  
    searchPlant(e.target.value) //creating a funciton for when text is put in the searh bar
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => searchPlantChange(e)}
      />
    </div>
  );
}

export default Search;
