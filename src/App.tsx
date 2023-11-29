import { useState } from "react";
import Navbar from "./components/navBar";
import StotyLine from "./components/storyLine";

const App = () => {
  return (
    <div className="drawer">
      <input id="menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-hidden">
        <div className="flex flex-col ">
          <Navbar />

          <StotyLine />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="h-full w-[20vw] bg-base-200">z</div>
      </div>
    </div>
  );
};

export default App;
