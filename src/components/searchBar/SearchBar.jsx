import { useState } from "react"
import "./searchBar.scss"

// Function to change the colour of the Buy and Rent Button once clicked
const types = ["buy","rent"];

function SearchBar() {
    const [query, setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    });

    const switchType =(val) => {
        setQuery((prev) => ({...prev, type: val})); // Value of location, minPrice and maxPrice remains the same
    };

    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                        >
                            {type}
                        </button>
                ))}
            </div>
            <form>
                <input type='text' name='location'placeholder='City Location' />
                <input 
                type='number' 
                name='minPrice' 
                min={0} max={10000000} 
                placeholder='Min Price' 
                />

                <input 
                type='number' 
                name='maxPrice' 
                min={0} 
                max={10000000} 
                placeholder='Max Price' 
                />

                <button>
                    <img src='search.png' alt=''/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar