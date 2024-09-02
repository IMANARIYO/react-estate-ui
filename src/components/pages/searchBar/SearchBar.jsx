import "./searchBar.scss";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0
  });

  const types = ['buy', 'rent'];

  const switchType = (type) => {
    setQuery({ ...query, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(query); // Handle your query data here
    // You can send the data to your backend, or do something else with it
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="City location"
          value={query.location}
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000000}
          placeholder="Minimum price"
          onChange={(e) => setQuery({ ...query, minPrice: e.target.value })}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000000}
          placeholder="Maximum price"
          onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
        />
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
