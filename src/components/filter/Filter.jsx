import "./filter.scss";
import React from "react";

export default function Filter() {
  return (
    <div className="filter">
      <h1>Search Results for <b>Location</b></h1>
      

        {/* Location Input */}
        <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder="city location name" />
        </div>
        </div>
      <div className="bottom">

        {/* Type Selection */}
        <div className="item">
          <label htmlFor="type">Type</label>
          <select id="type" name="type">
          <option value="">any</option> 
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* Property Options */}
        <div className="item">
          <label htmlFor="property">property</label>
          <select id="property" name="property">
            <option value="">any</option> 
            <option value="apartment">Apartment</option> 
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        {/* Minimum Price */}
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="Any" min="0" />
        </div>

        {/* Maximum Price */}
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="Any" min="0" />
        </div>

        {/* Bedrooms */}
        <div className="item">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input type="number" id="bedrooms" name="bedrooms" placeholder="Any" min="0" />
        </div>

        {/* Search Button */}
        <button type="submit" className="button">
          <img src="/search.png" alt="Search" />
        </button>
      </div>
      </div>
   
  );
}
