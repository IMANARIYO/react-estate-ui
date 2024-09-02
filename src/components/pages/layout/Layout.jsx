import Navbar from "../navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

import"./layout.scss"
export default function Layout() {
  return (
       <div className="layout">
      <div className="navbar">
      <Navbar
      />
      </div>
      <div className="content">
<Outlet />
      </div>
    </div>
  )
}
