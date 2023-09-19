import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <NavLink to={`/`} className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-map-marker-alt me-3"></i>Tourist
          </h1>
        </NavLink>
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
            <NavLink to={`/`} className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to={`/about`} className="nav-item nav-link active">
              About
            </NavLink>
            <NavLink to={`/service`} className="nav-item nav-link">
              Services
            </NavLink>
            <NavLink to={`/package`} className="nav-item nav-link">
              Packages
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to={`#`}
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to={``} className="dropdown-item">
                  Destination
                </NavLink>
                <NavLink to={``} className="dropdown-item">
                  Booking
                </NavLink>
                <NavLink to={``} className="dropdown-item">
                  Travel Guides
                </NavLink>
                <NavLink to={``} className="dropdown-item">
                  Testimonial
                </NavLink>
                <NavLink to={``} className="dropdown-item">
                  404 Page
                </NavLink>
              </div>
            </div>
            <NavLink to={``} className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          <NavLink to={``} className="btn btn-primary rounded-pill py-2 px-4">
            Register
          </NavLink>
        </div>
      </nav>

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
                    <NavLink to={`/`}>Home</NavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <NavLink to={`#`}>Pages</NavLink>
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
      </div>
    </div>
  );
};
export default Navbar;
