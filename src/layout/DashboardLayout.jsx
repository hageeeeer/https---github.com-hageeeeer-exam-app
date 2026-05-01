import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Nav from "../components/Nav";


export default function DashboardLayout() {
  function toggleAside() {
    console.log("toogle");
    setisOpen(!isOpen);
  }
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      <div className="lg:w-1/5">
      <Sidebar isOpen={isOpen} setisOpen={setisOpen}  toggleAside={toggleAside}/>
      </div>
      <div className="lg:w-4/5 w-full">
       <Nav  isOpen={isOpen} setisOpen={setisOpen}  toggleAside={toggleAside}/>
      <Outlet />
      </div>
    </div>
  );
}
