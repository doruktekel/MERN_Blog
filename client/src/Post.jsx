import { formatISO9075 } from "date-fns";

const Post = ({ content, cover, title, summary, createdAt, author }) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  return (
    <div className="post">
      <div className="image">
        <img src={`http://localhost:5005/` + cover} alt="" />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p className="by">
          <span>{author.username} </span>
          {formatISO9075(new Date(createdAt))}
        </p>

        <p className="parag">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
