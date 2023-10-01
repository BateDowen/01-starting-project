import { Link, Outlet, useParams } from "react-router-dom";
import { getAll } from "../../Utils/utils";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spiner";

const PackagesPage = () => {
  let params = useParams();
  const id = params.id;
  const [packages, setPackages] = useState([]);
  const [spinner, setSpinner] = useState(true);
  
  useEffect(() => {
    getAll().then((res) => {
      
      setPackages(
        res["-NfW1NX3j5b-YBEoBkRl"].map((x) => {
          return (
            <div
              key={x.destination}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/package-2.jpg" alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {x.destination}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>
                    {x.days}
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>
                    {x.person}
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">{x.price}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>{x.description}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link
                      href="#"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ bordeRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      );
    })
    .then(data =>
      setSpinner(false)
    );
  }, []);

  return (
    <div className="container-xxl py-5">
      
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">{spinner ? <Spinner/> : packages}</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default PackagesPage;
