import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import NotFound from "./pages/NotFound/NotFound";
import ShoppingBag from "./pages/ShoppingBag/ShoppingBag";
import Login from "./pages/Login/Login";
import "./App.css";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shoppingBag" element={<ShoppingBag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
