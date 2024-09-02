import "./list.scss";
import HouseCard from "../card/HouseCard";
import React from "react";
import { listData } from "../lib/dummyData";

export default function List () {
  return (
    <div className='list'>
      {listData.map(item => <HouseCard key={item.id} item={item} />)}
    </div>
  )
}
