import Header from "./components/Header"
import Footer from "./components/Footer"
import Boost from "./components/Boost"
import Advernced from "./components/Advernced"
// import Shortener from "./components/Shortener"
import CopyButton from "./features/CopyButton";
import Showcase from "./components/Showcase";
import LinkShortenerForm from "./features/LinkShortenerForm";

export default 
function App() {
  return (
    <>   
      <Header />
      <Showcase />
      <LinkShortenerForm />
      <CopyButton />
      {/* <Shortener /> */}
      <Advernced />
      <Boost />
      <Footer />
    </>
  );
}


