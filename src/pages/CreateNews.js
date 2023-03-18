import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("general");
  const [url, setUrl] = useState("");
  const [link, setLink] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const news = { title, body, type, url, link };
    // console.log(news);

    setIsPending(true);

    fetch("http://localhost:8000/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(news),
    }).then(() => {
      console.log("new news added");
      setIsPending(false);
      // history.go(-1);
      history("/store");
    });
  };

  return (
    <div className="create">
      <h1
        className="text-warning"
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          textShadow: "1px 1px 2px #000000",
        }}
      >
        Create News
      </h1>
      <form onSubmit={handleSubmit}>
        <label>News title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>News Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>News Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="general">general</option>
          <option value="business">business</option>
          <option value="entertainment">entertainment</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="technology">technology</option>
        </select>

        <label>News Image Url:</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)}></input>

        <label>News Page Link:</label>
        <input value={link} onChange={(e) => setLink(e.target.value)}></input>

        {!isPending && <button>Add News</button>}
        {isPending && <button disabled>Adding News...</button>}

        <div>
          <NavLink
            to="/store"
            className="btn text-warning bg-dark
            font-weight-bold"
          >
            STORE
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default CreateNews;
