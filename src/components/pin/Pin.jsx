import "./pin.scss";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="pin" className="popupImage" />
          <div className="textContainer">
          <Link to={`/${item.id}`}>{item.title}</Link>
          <span className="bed">{item.bedroom} bedroom(s)</span>
          <b>${item.price}</b>
        </div>
        </div>
      
      </Popup>
    </Marker>
  );
}
