import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../utils/auth";

import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import OurWork from "../pages/Ourwork";
import GetInvolved from "../pages/GetInvolved";
import Contact from "../pages/Contact";
import WildlifeRescue from "../pages/Rescue";
import MedicalTreatment from "../pages/Treatment";
import EducationAwareness from "../pages/Awareness";
import VolunteerDashboard from "../pages/Volunteer";
import AdminDashboard from "../pages/Admin";
import Donate from "../pages/Donate";

const AppRoutes = () => {
    const user = getUser();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourwork" element={<OurWork />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rescue" element={<WildlifeRescue />} />
            <Route path="/treatment" element={<MedicalTreatment />} />
            <Route path="/awareness" element={<EducationAwareness />} />
            <Route path="/donate" element={<Donate />} />
            
            <Route path="*" element={<Home />} />
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
            {/* <Route path="/volunteer" element={<VolunteerDashboardDashboard />} /> */}

            {/* Protected */}
            <Route
                path="/admin"
                element={
                    user?.role === "admin"
                    ? <AdminDashboard />
                    : <Navigate to="/login" />
                }
            />
            window.location.reload();

            <Route
                path="/volunteer"
                element={
                    user?.role === "volunteer"
                    ? <VolunteerDashboard />
                    : <Navigate to="/login" />
                }
            />
            window.location.reload();

        </Routes>
    );
};

export default AppRoutes;