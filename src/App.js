import Header from "./components/Header"
import Footer from "./components/Footer"
import Boost from "./components/Boost"
import Advernced from "./components/Advernced"
// import Shortener from "./components/Shortener"
import features from ""
import Showcase from "./components/Showcase";

export default 
function App() {
  return (
    <>   
      <Header />
      <Showcase />
      {/* <features /> */}
      {/* <Shortener /> */}
      <Advernced />
      <Boost />
      <Footer />
    </>
  );
}


