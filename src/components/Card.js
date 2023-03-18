import { NavLink, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Badge from "react-bootstrap/Badge";

const Card = (props) => {
  console.log("kp", props);

  const handleClick = () => {
    fetch("http://localhost:8000/news/" + props.id, {
      method: "DELETE",
    }).then(() => {
      console.log("news deleted");
      // history("/");
    });
  };

  const langClick = () => {};

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          {props.source && <Badge bg="danger">{props.source}</Badge>}
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.title}
            style={{ minHeight: "35vh" }}
          />
          <div className="card-body">
            {props.type && <Badge bg="danger">{props.type}</Badge>}
            <h5 className="card-title">{props.title}</h5>
            {props.body && <p className="card-body">{props.body}</p>}

            <p style={{ color: "grey" }}>
              {props.author && <p style={{ color: "grey" }}>{props.author}</p>}{" "}
              {props.publishedAt && (
                <p style={{ color: "grey" }}>{props.publishedAt}</p>
              )}
            </p>
            {props.value ? (
              <NavLink
                to={`/${props.url}`}
                className="btn text-warning bg-dark font-weight-bold"
                onClick={() => store.dispatch(langClick(props.value))}
              >
                Visit
              </NavLink>
            ) : (
              <NavLink
                to={`/${props.url}`}
                className="btn text-warning bg-dark font-weight-bold"
              >
                Visit
              </NavLink>
            )}
            {props.type && (
              <NavLink
                className="btn text-warning bg-dark font-weight-bold"
                onClick={handleClick}
              >
                Remove
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
