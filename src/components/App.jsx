import React from "react";
import NavBar from "./NavBar";
import Juicy from "./Juicy";
import Cozy from "./Cozy";
import Hot from "./Hot";

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
