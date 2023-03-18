import { Items, Lang } from "../dataItems/items";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { countryChange, sourceChange } from "../redux";
import { Link, NavLink } from "react-router-dom";
import store from "../redux/store";
import india from "../assets/india.png";
import canada from "../assets/canada.png";
import unitedStates from "../assets/unitedStates.png";
import australia from "../assets/australia.png";
import japan from "../assets/japan.png";
import russia from "../assets/russia.png";

function Common() {
  const handleChange = (e) => {
    console.log("khsushi", e);
    return function (dispatch) {
      dispatch(countryChange(e));
    };
  };

  console.log("hiii", Lang);

  return (
    <>
      <Hero />
      <div className="my-5">
        <h1 className="text-center">CATEGORIES</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Items.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    url={val.url}
                    id={val.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="portfolio bg-dark" id="portfolio" mb-5>
        <div className="container text-center">
          <h1 className="text-warning">COUNTRIES</h1>
          <p className="text-white">Select News by Country</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={india} className="card-img img-fluid" alt="p1" />
                <div className="card-body">
                  {/* <h2 className="card-tiltle"> Threads </h2>
                  <p className="card-text"> Illustration </p> */}
                  <NavLink
                    to="/general"
                    className="btn text-warning bg-dark
                    font-weight-bold"
                    onClick={() => store.dispatch(handleChange("in"))}
                  >
                    India
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={unitedStates}
                  className="card-img img-fluid"
                  alt="p2"
                />
                <div className="card-body">
                  {/* <h2 className="card-tiltle"> Explore </h2>
                  <p className="card-text"> Graphic Design </p> */}
                  <NavLink
                    to="/general"
                    className="btn text-warning bg-dark
                    font-weight-bold"
                    onClick={() => store.dispatch(handleChange("us"))}
                  >
                    United States
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={australia} className="card-img img-fluid" alt="p3" />
                <div className="card-body">
                  {/* <h2 className="card-tiltle"> Finish </h2>
                  <p className="card-text"> Identity </p> */}
                  <NavLink
                    to="/general#fetch_data"
                    className="btn text-warning bg-dark
                    font-weight-bold"
                    onClick={() => store.dispatch(handleChange("au"))}
                  >
                    Australia
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={canada} className="card-img img-fluid" alt="p4" />
                <div className="card-body">
                  {/* <h2 className="card-tiltle"> Lines </h2>
                  <p className="card-text"> Branding country</p> */}
                  <NavLink
                    to="/general"
                    className="btn text-warning bg-dark
                    font-weight-bold"
                    onClick={() => store.dispatch(handleChange("ca"))}
                  >
                    Canada
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={russia} className="card-img img-fluid" alt="p5" />
                <div className="card-body">
                  {/* <h2 className="card-tiltle"> Southwest </h2>
                  <p className="card-text"> Website Design </p> */}
                  <NavLink
                    to="/general"
                    className="btn text-warning bg-dark
                    font-weight-bold"
                    onClick={() => store.dispatch(handleChange("ru"))}
                  >
                    Russia
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={japan} className="card-img img-fluid" alt="p6" />
                <div className="card-body">
                  {/* <h2 className="card-tiltle"> Window </h2>
                  <p className="card-text"> Photography </p> */}
                  <NavLink
                    to="/general"
                    className="btn text-warning bg-dark
                    font-weight-bold"
                    onClick={() => store.dispatch(handleChange("jp"))}
                  >
                    Japan
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-5">
        <h1 className="text-center">LANGUAGES</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Lang.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    id={val.id}
                    value={val.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Common;
