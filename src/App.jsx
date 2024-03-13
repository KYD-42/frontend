import "./App.css";
import { Routes, Route } from "react-router-dom";

// Tails&Tales Pages
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Places from "./Pages/Places/PlacesList";
import PlacesDetails from "./Pages/Places/PlacesDetails"


// SIGNUP // LOGIN  Pages
import SignUp from "./Pages/Registration/SignUp";
import SignUpBusiness from "./Pages/Registration/SignUpBusiness";
import LogIn from "./Pages/LogIn";

// User Pages
import UserProfile from "./Pages/UserPages/UserProfile";

// Business Page
import Dashboard from "./Pages/BusinessPages/Dashboard"
import BusinessProfile from "./Pages/BusinessPages/BusinessProfile"
import RegisterPlace from "./Pages/BusinessPages/RegisterPlace"

// Components
import Navbar from "./Components/NavBar";

// Not Found
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <Routes>

          {/* Tails&Tales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<PlacesDetails/>}/>

          {/* Registration Pages */}
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/business-signup" element={<SignUpBusiness/>}/>
          <Route path="/business-register-place" element={<RegisterPlace/>}/>

          {/* Login Pages */}
          <Route path="/login" element={<LogIn/>}/>

          {/* User side */}
          <Route path="/profile/:id" element={<UserProfile/>}/>

          {/* Business Side */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business/:id" element={<BusinessProfile />}/>

          {/* Not found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;


//  tá tudo bem!  

// vai ficar tudo bem 🌈