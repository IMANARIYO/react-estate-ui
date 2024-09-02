import "./homePage.scss";
import React from "react";
import SearchBar from "../searchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage"> 
      <div className="textContainer">
        <div className="wrapper">
        <h1 className="title"> 
        Find Real Estate & get Your Dream Place 
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iusto, sit illum reprehenderit harum temporibus, corrupti hic autem aliquam alias magnam quasi mollitia laudantium sequi saepe omnis blanditiis dignissimos repellat!  </p>
        <SearchBar/>
        <div className="boxes">
          <div className="box">
           <h1>16+</h1>
           <h2>Years Of Exprience</h2>
          </div>
          <div className="box">
<h1>200</h1>
<h2>awards</h2>
          </div>
          <div className="box">
<h1>200</h1>
<h2>awards</h2>
          </div>

         
      
        </div>
        </div>
 
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
};

export default HomePage;
