import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryChange, languageChange, sourceChange } from "../redux";
import { IoMdCreate } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { TiWeatherPartlySunny } from "react-icons/ti";
import store from "../redux/store";
import { Badge } from "react-bootstrap";
import useFetch from "./useFetch";
import favicon from "../assets/favicon.jpg";

const Navbar = (props) => {
  console.log("yesss", props);

  const handleChange = (e) => {
    console.log("hwee", e);
    return function (dispatch) {
      dispatch(countryChange(e.target.value));
      dispatch(languageChange(""));
      dispatch(sourceChange(""));
    };
  };

  const langChange = (e) => {
    console.log(e);
    return function (dispatch) {
      dispatch(languageChange(e.target.value));
      dispatch(countryChange(""));
      dispatch(sourceChange(""));
    };
  };

  const sourceClick = (e) => {
    console.log("event", e);
    return function (dispatch) {
      dispatch(sourceChange(e));
      dispatch(countryChange(""));
      dispatch(languageChange(""));
    };
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              style={{ marginRight: "0px" }}
              src={favicon}
              alt="news_logo"
              height="60px"
              className="image"
            />
          </Link>
          <Link className="navbar-brand" to="/">
            NEWS Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <AiOutlineHome
                    style={{
                      marginRight: "8px",
                      fontSize: "45px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Weather"
                >
                  <TiWeatherPartlySunny
                    style={{
                      marginRight: "8px",
                      fontSize: "45px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Wishlist"
                >
                  <CgUserList
                    style={{
                      marginRight: "0px",
                      fontSize: "45px",
                      marginTop: "4px",
                    }}
                  />
                  {props.cartData && (
                    <Badge bg="danger" style={{ paddingBottom: "2px" }}>
                      {props.cartData.length}
                    </Badge>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/create"
                >
                  <IoMdCreate
                    style={{
                      marginRight: "8px",
                      fontSize: "45px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  <BiPhoneCall
                    style={{
                      marginRight: "8px",
                      fontSize: "45px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div style={{ height: "110%", width: "30%" }}>
            <select
              className="form-select"
              defaultValue="en"
              onChange={(e) => {
                store.dispatch(langChange(e));
              }}
              style={{
                height: "100%",
                width: "50%",
                backgroundColor: "rgb(33,37,41)",
                color: "#FFFFFF",
              }}
              // disabled={!props.language}
            >
              <option value="ar">Arabic</option>
              <option value="de">German</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="he">Hebrew</option>
              <option value="it">Italian</option>
              <option value="nl">Dutch</option>
              <option value="no">Norwegian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="sv">Swedish</option>
              <option value="zh">Chinese</option>
            </select>
          </div>

          <div style={{ height: "110%", width: "40%" }}>
            <select
              className="form-select"
              defaultValue="cbc-news"
              onChange={(e) => store.dispatch(sourceClick(e))}
              style={{
                height: "100%",
                width: "70%",
                backgroundColor: "rgb(33,37,41)",
                color: "#FFFFFF",
              }}
            >
              {/* <option value="abc-news">ar</option>
              <option value="abc-news-au">de</option>
              <option value="aftenposten">en</option>
              <option value="al-jazeera-english">es</option>
              <option value="ansa">fr</option>
              <option value="argaam">he</option>
              <option value="axios">it</option>
              <option value="bbc-news">nl</option>
              <option value="bbc-sport">no</option>
              <option value="bild">pt</option>
              <option value="blasting-news-br">ru</option> */}
              <option value="buzzfeed">buzzfeed</option>
              <option value="cbc-news">cbc-news</option>
              {/* <option value="cbs-news">ud</option>
              <option value="cnn">zh</option>
              <option value="entertainment-weekly">ud</option>
              <option value="espn">zh</option> */}
            </select>
          </div>

          <div style={{ height: "110%", width: "40%" }}>
            <select
              className="form-select"
              defaultValue="IN"
              onChange={(e) => {
                store.dispatch(handleChange(e));
              }}
              style={{
                height: "100%",
                width: "30%",
                backgroundColor: "rgb(33,37,41)",
                color: "#FFFFFF",
              }}
              // disabled={props.language}
            >
              <option value="AE">United Arab Emirates</option>
              <option value="AR">Argentina</option>
              <option value="AT">Austria</option>
              <option value="AU">Australia</option>
              <option value="BE">Belgium</option>
              <option value="BG">Bulgaria</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CH">Switzerland</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="CU">Cuba</option>
              <option value="CZ">Czech Republic</option>
              <option value="DE">Germany</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="GB">United Kingdom</option>
              <option value="GR">Greece</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="ID">Indonesia</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IN">India</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="KR">Korea</option>
              <option value="LT">Lithuania</option>
              <option value="LV">Latvia</option>
              <option value="MA">Morocco</option>
              <option value="MX">Mexico</option>
              <option value="MY">Malaysia</option>
              <option value="NG">Nigeria</option>
              <option value="NL">Netherlands</option>
              <option value="NO">Norway</option>
              <option value="NZ">New Zealand</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="SA">Saudi Arabia</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="SE">Sweden</option>
              <option value="SG">Singapore</option>
              <option value="SI">Slovenia</option>
              <option value="SK">Slovakio</option>
              <option value="TW">Taiwan, Republic of China</option>
              <option value="UA">Ukraine</option>
              <option value="US">United States of America</option>
              <option value="VE">Venezuela</option>
            </select>
          </div>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/General"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/Technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    country: state.country.country,
    language: state.language.language,
    source: state.source.source,
    cartData: state.cart.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countryChange: (country) => dispatch(countryChange(country)),
    languageChange: (language) => dispatch(languageChange(language)),
    sourceChange: (source) => dispatch(sourceChange(source)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
