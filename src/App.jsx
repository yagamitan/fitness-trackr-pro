import { Route, Routes } from "react-router-dom";
import ActivitiesPage from "./activities/ActivitiesPage";
import Layout from "./layout/Layout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404";
import ActivitiesDetails from "./activities/ActivityDetails";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route path="activities/:id" element={<ActivitiesDetails />} />
      </Route>
    </Routes>
  );
}
