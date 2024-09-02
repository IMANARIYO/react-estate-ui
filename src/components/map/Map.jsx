import "leaflet/dist/leaflet.css";
import "./map.scss";
import Pin from "../pin/Pin";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map({ items }) {
  const position = [51.505, -0.09];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="leaflet-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </div>
  );
}
