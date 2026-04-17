import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/Ourwork";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import WildlifeRescue from "./pages/Rescue";
import MedicalTreatment from "./pages/Treatment";
import EducationAwareness from "./pages/Awareness";
import AdminDashboard from "./pages/Admin";
import VolunteerDashboard from "./pages/Volunteer";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <Home />} />
        <Route path = "/about" element = { <About />} />
        <Route path = "/ourwork" element = { <OurWork />} />
        <Route path = "/getinvolved" element = { <GetInvolved />} />
        <Route path = "/contact" element = { <Contact />} />
        <Route path = "/login" element = { <Login />} />
        <Route path = "/rescue" element = { <WildlifeRescue />} />
        <Route path = "/treatment" element = { <MedicalTreatment />} />
        <Route path = "/awareness" element = { <EducationAwareness />} />
        <Route path = "/admin" element = { <AdminDashboard />} />
        <Route path = "/volunteer" element = { <VolunteerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

