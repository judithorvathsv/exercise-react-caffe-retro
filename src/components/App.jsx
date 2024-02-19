import React from "react";
import Juicy from "./Juicy";
import Cozy from "./Cozy";
import Hot from "./Hot";

function NavBar() {
  return (
    <header id="appHeader">
      <nav className="navbar">
        <a className="nav-link active" aria-current="page" href="#hot">
          Hot
        </a>
        <a className="nav-link" href="#juicy">
          Juicy
        </a>
        <a className="nav-link" href="#cosy">
          Cosy
        </a>
      </nav>
    </header>
  );
}

export function App() {
  return (
    <>
      <NavBar />
      <Hot />
      <Juicy />
      <Cozy />
    </>
  );
}
