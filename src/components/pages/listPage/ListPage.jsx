import "./listPage.scss";
import Filter from "../../filter/Filter";
import HouseCard from "../../card/HouseCard";
import Map from "../../map/Map";
import React from "react";
import { listData } from "../../lib/dummyData";

export default function ListPage() {
  const data = listData;
  
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
  
          {data.map(item => (
            <HouseCard key={item.id} item={item} />  // Added return for each item
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  );
}
