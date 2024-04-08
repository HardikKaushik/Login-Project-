
import Avatar from "./components/Avatar";
import Emailverify from "./components/Emailverify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SIgnup from "./components/SIgnup";
import Selectpage from "./components/Selectpage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      {/* on uncommenting below tags components will mount indvidually */}

      {/* <SIgnup />
  <Avatar/>
  <Selectpage/>
  <Nav/>
  <Emailverify/>
<Footer/> */}


      {/* the default comopent will mount one by one after each step */}
      <SIgnup />
    </>
  );
}

export default App;
