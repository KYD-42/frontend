import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

// Components
import Navbar from "./Components/NavBar";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <h1>Tales and Tales</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;