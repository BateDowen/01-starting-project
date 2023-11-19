import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./components/travel-agency-html-template/Home/HomePage";
import Navbar from "./components/travel-agency-html-template/Navbar/Navbar";
import Topbar from "./components/travel-agency-html-template/Navbar/Topbar";
import Footer from "./components/travel-agency-html-template/Navbar/Footer";
import AboutPage from "./components/travel-agency-html-template/About/AboutPage";
import ServicePage from "./components/travel-agency-html-template/ServicePage/ServicePage";
import ErrorPage from "./components/travel-agency-html-template/ErrorPage/ErrorPage";
import PackagesPage from "./components/travel-agency-html-template/PackagePage.js/PackagePage";
import Booking from "./components/travel-agency-html-template/PackagePage.js/Booking";
import Register from "./components/travel-agency-html-template/Register/Register";
import Slider from "./components/travel-agency-html-template/Slider/Slider";
import Login from "./components/travel-agency-html-template/Login/Login";
import { AuthContextProvider } from "./components/travel-agency-html-template/contexts/auth-context";
import Modal2 from "./components/Modal2/Modal2";
import Welcome from "./components/Welcome/Welcome";
import Modal from "./components/Utils/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/welcome",
        element:( 
            <>
            <Welcome />
            <Outlet  />
            </>
        ),
        children: [
          {path: 'modal', element: <Modal2 />}
        ]
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/packages",
        element: <PackagesPage />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: '/logout',
      //   element: <Logout />
      // },
      {
        path: "/slider",
        element: <Slider />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <Topbar />
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
