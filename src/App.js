import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import Common from "./pages/Common";
import Weather from "./pages/weather/Weather";
import Wishlist from "./pages/Wishlist";
import CreateNews from "./pages/CreateNews";
import StoreNews from "./pages/StoreNews";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Common />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/General" element={<FetchData cat="General" />} />
            <Route path="/Business" element={<FetchData cat="Business" />} />
            <Route
              path="/Entertainment"
              element={<FetchData cat="Entertainment" />}
            />
            <Route path="/Health" element={<FetchData cat="Health" />} />
            <Route path="/Science" element={<FetchData cat="Science" />} />
            <Route path="/Sports" element={<FetchData cat="Sports" />} />
            <Route
              path="/Technology"
              element={<FetchData cat="Technology" />}
            />
            <Route path="/create" element={<CreateNews />} />
            <Route path="/store" element={<StoreNews />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
