import react from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { removeToCart } from "../redux";
import { ImBin } from "react-icons/im";
import Badge from "react-bootstrap/Badge";

function Wishlist(props) {
  return (
    <div className="container my-4" id="wishlist">
      <h3 style={{ textAlign: "center" }}>
        <u>WISHLIST</u>
      </h3>
      <div
        // className="conatiner d-flex justify-content-center align-items-center flex-column my-3"
        className="d-flex flex-wrap"
        style={{ minHeight: "100vh" }}
      >
        {props.cartData
          ? props.cartData.length == 0
            ? "WISHLIST IS EMPTY...."
            : props.cartData.map((items, index) => (
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
                    padding: "10px",
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
                    className="view_button"
                    to={items.url}
                    target="blank"
                  >
                    View More
                  </NavLink>
                  <ImBin
                    className="ImBin"
                    onClick={() => props.removeToCart(items.title)}
                    style={{ width: "50px", height: "30px" }}
                  />
                </div>
              ))
          : "Loading..."}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (title) => dispatch(removeToCart(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { Link, NavLink } from "react-router-dom";
// import { removeToCart } from "../redux";
// import { ImBin } from "react-icons/im";
// import Badge from "react-bootstrap/Badge";

// function Wishlist(props) {
//   console.log("propshi", props);
//   return (
//     <div className="container my-4" id="wishlist">
//       <h3 style={{ textAlign: "center" }}>
//         <u>WISHLIST</u>
//       </h3>
//       <div
//         className="conatiner d-flex justify-content-center align-items-center flex-column my-3"
//         style={{ minheight: "110vh" }}
//       >
//         {props.cartData ? (
//           props.cartData.length === 0 ? (
//             "WISHLIST IS EMPTY...."
//           ) : (
//             <div
//               className="d-flex flex-wrap justify-content-center"
//               style={{ maxWidth: "1200px", margin: "0 auto" }}
//             >
//               {props.cartData.map((items, index) => (
//                 <div
//                   key={index}
//                   className="container my-3"
//                   style={{
//                     width: "33.33%",
//                     boxShadow: "2px 2px 10px silver",
//                     borderRadius: "10px",
//                     borderStyle: "solid",
//                     borderColor: "#000000",
//                     borderWidth: "2px",
//                   }}
//                 >
//                   <Badge bg="danger">{items.source.name}</Badge>
//                   <h5 className="my-2">{items.title}</h5>
//                   <div className="d-flex justify-content-center align-items-center">
//                     <img
//                       src={items.urlToImage}
//                       alt="Image Not Found"
//                       className="img-fluid"
//                       style={{
//                         width: "100%",
//                         height: "300px",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </div>
//                   <p>{items.content}</p>
//                   <p style={{ color: "grey" }}>
//                     {items.author ? `${items.author}` : `Unknown author`} on{" "}
//                     {new Date(items.publishedAt).toGMTString()}
//                   </p>
//                   <NavLink
//                     className="view_button"
//                     // style={{ marginRight: "425px" }}
//                     // to={items.url}
//                     target="blank"
//                   >
//                     View More
//                   </NavLink>
//                   <ImBin
//                     className="ImBin"
//                     onClick={() => props.removeToCart(items.title)}
//                     style={{ width: "50px", height: "30px" }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )
//         ) : (
//           "Loading..."
//         )}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     cartData: state.cart.cartData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeToCart: (title) => dispatch(removeToCart(title)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

// // import React, { useEffect } from "react";
// // import { connect } from "react-redux";
// // import { Link, NavLink } from "react-router-dom";
// // import { removeToCart } from "../redux";
// // import { ImBin } from "react-icons/im";
// // import Badge from "react-bootstrap/Badge";

// // function Wishlist(props) {
// //   console.log("propshi", props);
// //   return (
// //     <div className="container my-4" id="wishlist">
// //       <h3 style={{ textAlign: "center" }}>
// //         <u>WISHLIST</u>
// //       </h3>
// //       <div
// //         className="d-flex flex-wrap justify-content-center align-items-start my-3"
// //         style={{ maxWidth: "1200px", margin: "auto" }}
// //       >
// //         {props.cartData ? (
// //           props.cartData.length === 0 ? (
// //             <p>WISHLIST IS EMPTY....</p>
// //           ) : (
// //             props.cartData.map((items, index) => (
// //               <div
// //                 key={index}
// //                 className="d-flex flex-column mx-3 my-3"
// //                 style={{
// //                   width: "40%",
// //                   boxShadow: "2px 2px 10px silver",
// //                   padding: "15px", // added padding here
// //                   borderRadius: "10px",
// //                   borderStyle: "solid",
// //                   borderColor: "#000000",
// //                   borderWidth: "2px",
// //                   height: "100%",
// //                 }}
// //               >
// //                 <Badge bg="danger">{items.source.name}</Badge>
// //                 <h5 className="my-2">{items.title}</h5>
// //                 <div className="d-flex justify-content-center align-items-center">
// //                   <img
// //                     src={items.urlToImage}
// //                     alt="Image Not Found"
// //                     className="img-fluid"
// //                     style={{
// //                       width: "100%",
// //                       height: "300px",
// //                       objectFit: "cover",
// //                     }}
// //                   />
// //                 </div>
// //                 <p>{items.content}</p>
// //                 <p style={{ color: "grey" }}>
// //                   {items.author ? `${items.author}` : `Unknown author`} on{" "}
// //                   {new Date(items.publishedAt).toGMTString()}
// //                 </p>
// //                 <div className="d-flex align-items-center">
// //                   <NavLink
// //                     className="view_button"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     href={items.url}
// //                   >
// //                     View More
// //                   </NavLink>
// //                   <ImBin
// //                     className="ImBin"
// //                     onClick={() => props.removeToCart(items.title)}
// //                     style={{ width: "50px", height: "30px" }}
// //                   />
// //                 </div>
// //               </div>
// //             ))
// //           )
// //         ) : (
// //           <p>Loading...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // const mapStateToProps = (state) => {
// //   return {
// //     cartData: state.cart.cartData,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     removeToCart: (title) => dispatch(removeToCart(title)),
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
