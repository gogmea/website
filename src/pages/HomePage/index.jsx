import React from "react";
import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import Feature from "./components/Feature";
import Data from "./components/Data";
import Solution from "./components/Solution";
import Resource from "./components/Resource";
import ComplexDialog from "./components/ComplexDialog";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Resource />
      {/* <Introduction /> */}
      <Feature />
      {/* <Data /> */}
      {/* <Solution /> */}
      <ComplexDialog />
    </div>
  );
}
