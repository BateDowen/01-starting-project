import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/travel-agency-html-template/Home/HomePage";
import Navbar from "./components/travel-agency-html-template/Navbar/Navbar";
import Topbar from "./components/travel-agency-html-template/Navbar/Topbar";
import Footer from "./components/travel-agency-html-template/Navbar/Footer";
import AboutPage from "./components/travel-agency-html-template/About/AboutPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: 'about',
    element: <AboutPage />
  }
])

function App() {
  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
