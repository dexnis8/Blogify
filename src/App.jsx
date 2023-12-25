import React from "react";
import Colors from "./components/Colors";
import "./App.css";
import Hero from "./components/Hero";
import DemoVideo from "./components/DemoVideo";
import Discover from "./components/Discover";
import Super from "./components/Super";
import Steps from "./components/Steps";
import Campaign from "./components/Campaign";

const App = () => {
  return (
    <>
      {/* <Colors /> */}
      <div className="flex pb-12 flex-col gap-12">
        <Hero />
        <DemoVideo />
        <Discover />
        <Super />
        <Steps />
        <Campaign />
      </div>
    </>
  );
};

export default App;
