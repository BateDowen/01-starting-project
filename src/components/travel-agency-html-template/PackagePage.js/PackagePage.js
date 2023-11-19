import { Link, Outlet, useParams } from "react-router-dom";
import * as authService from "../../Utils/utils";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spiner";
import { Packege } from "./Packege";

const PackagesPage = () => {
  let params = useParams();
  const id = params.id;
  const [packages, setPackages] = useState([]);
  const [spinner, setSpinner] = useState(true);
  //TODO: packages to be object not component
  useEffect(() => {
    authService
      .getAll()
      .then((res) => {
        console.log({ res });
        setPackages(res["-NfW1NX3j5b-YBEoBkRl"]);
      })
      .then((data) => setSpinner(false));
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
        {/* <div className="row g-4 justify-content-center">{spinner ? <Spinner/> : packages}</div> */}
        <div className="row g-4 justify-content-center">
          {spinner ? (
            <Spinner />
          ) : (
            packages.map((p) => {
              return (
                <Packege
                  key={p.destination}
                  destination={p.destination}
                  days={p.days}
                  person={p.person}
                  price={p.price}
                  description={p.description}
                />
              );
            })
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default PackagesPage;
