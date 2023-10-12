import { Link, NavLink, Outlet} from "react-router-dom";

const Navbar = () => {
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
                to={`#`}
                className="btn btn-lg btn-primary btn-lg-square"
                data-bs-toggle="dropdown"
                style={{width: '150px', marginTop: '26px', marginRight: '15px'}}
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
                <option to={``} className="dropdown-item">
                  404 Page
                </option>
              </select>
            </div>
            <NavLink  to={``} className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          <NavLink  to={`/register`} className="btn btn-primary rounded-pill py-2 px-4">
            Register
          </NavLink>
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
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
