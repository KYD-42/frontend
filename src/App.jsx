import "./App.css";
import { Routes, Route } from "react-router-dom";

// Tails&Tales Pages
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Bars from "./Pages/Places/BarsPage";

// SIGNUP // LOGIN  Pages
import SignUp from "./Pages/Registration/SignUp";
import SignUpBusiness from "./Pages/Registration/SignUpBusiness";
import LogIn from "./Pages/LogIn";

// User Pages
import UserProfile from "./Pages/UserPages/UserProfile";

// Business Page
import Dashboard from "./Pages/BusinessPages/Dashboard"

// Components
import Navbar from "./Components/NavBar";

// Not Found
import NotFound from "./Pages/NotFound";



function App() {
  return (
    <main>
      <Navbar />
      <div>
        <h1>Tales and Tales</h1>
        <Routes>

          {/* Tails&Tales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Bars />} />

          {/* Registration Pages */}
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/business-signup" element={<SignUpBusiness/>}/>

          {/* Login Pages */}
          <Route path="/login" element={<LogIn/>}/>

          {/* User side */}
          <Route path="/profile" element={<UserProfile/>}/>

          {/* Business Side */}
          <Route path="/dashboard" element={<Dashboard />} />


          {/* Not found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;