import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Boost from "./components/Boost"
import Advernced from "./components/Advernced"
// import Shortener from "./components/Shortener"
import CopyButton from "./features/CopyButton";
import Showcase from "./components/Showcase";
// import LinkShortenerForm from "./features/LinkShortenerForm";
import ShortenButton from "./features/ShortenButton";
// import BackgroundPatterns from "./contexts/BackgroundPatterns";


import { ShortenPattern } from "./contexts/BackgroundPatterns";

export default 
function App() {
  return (
    <>   
      <Header />
      <Showcase />
      <div>
    
      <ShortenPattern  />
    </div>
      {/* <BackgroundPatterns /> */}
      {/* <LinkShortenerForm /> */}
      <ShortenButton />
      <CopyButton />
      {/* <Shortener /> */}
      <Advernced />
      <Boost />
      <Footer />
    </>
  );
}


