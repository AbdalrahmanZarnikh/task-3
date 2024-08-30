import { Route, Routes } from "react-router-dom";
import Properties from "./pages/Properties";
import ContactUs from "./pages/ContactUs";
import SingleProperty from "./pages/SingleProperty";
import Home from "./pages/Home";
import TopBar from "./components/TopBar/TopBar"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <TopBar />
      <hr />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/singleproperty" element={<SingleProperty />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
