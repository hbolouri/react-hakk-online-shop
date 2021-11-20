import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Men from "./pages/Men/Men";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Men />
    </div>
  );
}

export default App;
