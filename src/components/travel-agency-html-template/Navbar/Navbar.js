import { Link, NavLink, Outlet, Route, useNavigate} from "react-router-dom";
import Slider from "../Slider/Slider";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth-context";
import * as authService from "../../Utils/utils"
import Modal from "../../Utils/Modal";

const Navbar = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false)
  let username;
  if(authCtx.isLoged){
    const {getUserCredentials} = authCtx;
    const userInfo = getUserCredentials();
    username = userInfo.username

  }
  console.log(username);
  const Logout = (e) =>{
    e.preventDefault();
    try {
      
      authService.logout();
      authCtx.logout();
      setOpenModal(true)
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
   // TODO: pop up window 
};
  const onChangeRoute =(e) =>{
    navigate(e)
  }
  return (
    <div className="container-fluid position-top p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to={`/`} className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-map-marker-alt me-3"></i>Tourist
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink  to={`/`} className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink  to={`/about`} className="nav-item nav-link">
              About
            </NavLink>
            <NavLink  to={`/service`} className="nav-item nav-link">
              Services
            </NavLink>
            <NavLink  to={`/packages`} className="nav-item nav-link">
              Packages
            </NavLink>
            <div className="" >
              <select
              name="pages"
                className="btn btn-lg btn-primary btn-lg-square"
                data-bs-toggle="dropdown"
                style={{width: '150px', marginTop: '26px', marginRight: '15px'}}
                onChange={ev => onChangeRoute(ev.currentTarget.value)}
              >
                <option to={``} className="dropdown-item">
                  Destination
                </option>
                <option to={``} className="dropdown-item">
                  Booking
                </option>
                <option to={``} className="dropdown-item">
                  Travel Guides
                </option>
                <option to={``} className="dropdown-item">
                  Testimonial
                </option>
                <option value={'/slider'} className="dropdown-item" >
                
                  Slider
                </option> 
                
              </select>
            </div>
            <NavLink  to={``} className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          {authCtx.isLoged ? <div>Welcome, {username} <button  onClick={Logout} className="btn btn-primary rounded-pill py-2 px-4">
              Logout
            </button></div> :  
          <>
            <NavLink  to={`/login`} className="btn btn-primary rounded-pill py-2 px-4">
              Login
            </NavLink>
            <NavLink  to={`/register`} className="btn btn-primary rounded-pill py-2 px-4">
            Register
            </NavLink>
          </>
          }
        </div>
      </nav>
{/* 
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={`#`}>Pages</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      <div id="detail">
        <Modal open={openModal} onClose={() => setOpenModal(false)}/><Modal />
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
