import {
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/packages',
        element: <PackagesPage />,
        
      },
      {
        path: '/booking/:id',
        element: <Booking />,
      },
      {
        path: '/service',
        element: <ServicePage />
      },
      
    ],
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
    <div className="app">
      <Topbar/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
