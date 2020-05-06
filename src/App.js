import React from "react";
import Samie from './samie' ;
import Users from './addusers';
import Navbar from "./navbar";

function Lol() {
  return (
    <div className="App">
      <Navbar />
      <Samie name="ahmed" age="30" state="bad" />
      <h1>My frist react App</h1>
      <h2>welcome :) </h2>
      <Samie name="mohamed" age="25" state="good" gnd="nal" />
      <Users />
    </div>
  );
}

export default Lol;
