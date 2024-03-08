import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import SignUp from "./Pages/Profiles/SignUp"

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
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;