import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import SinglePost from "./pages/SinglePost";

const Post = ({ content, cover, title, summary, createdAt, author, _id }) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img
            src={`https://mern-blog-server-61xo.onrender.com/` + cover}
            alt=""
          />
        </Link>
      </div>

      <div className="info">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="by">
          <span>
            {author.username.charAt(0).toUpperCase() + author.username.slice(1)}{" "}
          </span>
          {formatISO9075(new Date(createdAt))}
        </p>

        <p className="parag">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
