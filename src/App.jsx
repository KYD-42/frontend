import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CloudinaryContext } from 'cloudinary-react';

// Tails&Tales Pages
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Places from "./Pages/Places/PlacesList";
import PlacesDetails from "./Pages/Places/PlacesDetails"
import RestaurantsPage from "./Pages/Places/RestaurantsPage";
import BarsPage from "./Pages/Places/BarsPage";
import StayPage from "./Pages/Places/StayPage";


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
    <CloudinaryContext cloudName="do09bl99j">
    <main>
      <Navbar />
      <div>
        <Routes>

          {/* Tails&Tales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<PlacesDetails/>}/>
          <Route path="/places/restaurants" element={<RestaurantsPage/>}/>
          <Route path="/places/bars" element={<BarsPage/>}/>
          <Route path="/places/hotels-hostels" element={<StayPage/>}/>

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
    </CloudinaryContext>
  );
}

export default App;


//  tá tudo bem!  

// vai ficar tudo bem 🌈