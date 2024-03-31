import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../contexts/UserContext";

const SinglePost = () => {
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);

  const fetchInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://mern-blog-server-61xo.onrender.com/user/post/${id}`
      );
      const data = await response.json();
      setInfo(data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) {
    return <div> Loading... </div>;
  }
  if (info) {
    return (
      <div className="singlepost">
        <h1>{info.title}</h1>
        <div className="author-info">
          <p>by @{info.author.username.toUpperCase()}</p>
          <p>{formatISO9075(new Date(info.updatedAt))}</p>
        </div>

        <div className="singlepost-img">
          <img src={`http://localhost:5005/${info.cover}`} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: info.content }}
          className="content"
        />
        {userInfo.id === info.author._id && (
          <div className="edit-btn-container">
            <Link to={`/edit/${id}`} className="edit-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Edit this post
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default SinglePost;
