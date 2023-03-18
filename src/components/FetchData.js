import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addToCart,
} from "../redux";
import store from "../redux/store";
import { FaSave } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";

const FetchData = (props) => {
  console.log("new", props);

  let url;

  props.source
    ? props.cat
      ? (url = `https://newsapi.org/v2/top-headlines?category=${props.cat}&source=${props.source}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
      : (url = `https://newsapi.org/v2/top-headlines?source=${props.source}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
    : // (url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
    props.country
    ? props.cat
      ? (url = `https://newsapi.org/v2/top-headlines?category=${props.cat}&country=${props.country}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
      : (url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
    : // (url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
    props.language
    ? props.cat
      ? (url = `https://newsapi.org/v2/top-headlines?category=${props.cat}&country=${props.language}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
      : (url = `https://newsapi.org/v2/top-headlines?country=${props.language}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
    : (url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=843eaeadc0ad4890a68228fb752bc77b`);

  // props.country
  //   ? props.language
  //     ? (url = `https://newsapi.org/v2/top-headlines?language=${props.language}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
  //     : (url = `https://newsapi.org/v2/top-headlines?language=${props.language}&apiKey=843eaeadc0ad4890a68228fb752bc77b`)
  //   : (url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=843eaeadc0ad4890a68228fb752bc77b`);

  console.log(url);

  const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUsersRequest());
      axios
        .get(url)
        .then((response) => {
          const data = response.data.articles;
          dispatch(fetchUsersSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
  };

  useEffect(() => {
    store.dispatch(fetchUsers());
  }, [props.country, props.language, props.cat, props.source]);

  return (
    <div className="container my-4" id="fetch_data">
      <h3 style={{ textAlign: "center", marginBottom: "25px" }}>
        <u>{props.cat}</u>
      </h3>
      <div
        // className="conatiner d-flex justify-content-center align-items-center flex-column my-3"
        className="d-flex flex-wrap"
        style={{ minHeight: "100vh", marginBottom: "25px" }}
      >
        {props.users
          ? props.users.map((items, index) => (
              <div
                key={index}
                className="container my-3"
                style={{
                  width: "400px",
                  boxShadow: "2px 2px 10px silver",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  borderWidth: "2px",
                  padding: "15px",
                  marginBottom: "20px",
                }}
              >
                <Badge bg="danger">{items.source.name}</Badge>
                <h5 className="my-2">{items.title}</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={items.urlToImage}
                    alt="Image Not Found"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p>{items.content}</p>
                <p style={{ color: "grey" }}>
                  {items.author ? `${items.author}` : `Unknown author`} on{" "}
                  {new Date(items.publishedAt).toGMTString()}
                </p>
                <NavLink
                  className="view_button font-weight-bold"
                  to={items.url}
                  target="blank"
                >
                  View More
                </NavLink>
                <FaSave
                  className="fasave"
                  style={{ width: "50px", height: "40px" }}
                  onClick={() => props.addToCart(items)}
                />
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.fetch.loading,
    users: state.fetch.users,
    error: state.fetch.error,
    country: state.country.country,
    language: state.language.language,
    source: state.source.source,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersRequest: () => dispatch(fetchUsersRequest()),
    fetchUsersSuccess: (users) => dispatch(fetchUsersSuccess(users)),
    fetchUsersFailure: (error) => dispatch(fetchUsersFailure(error)),
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
