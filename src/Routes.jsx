import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from './Pages/Login/Login'
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


