import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search-form">
        <img className="searchIcon" src="./images/icon-search.svg" alt="Search Icon" />
        <input className="userInput" type="text"  placeholder="Search GitHub User"/>
        <button className="searchButton">Search</button>
    </div>
  )
}

export default SearchBar