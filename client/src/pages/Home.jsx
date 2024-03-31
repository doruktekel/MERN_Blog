import React, { useEffect, useState } from "react";
import Post from "../Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://mern-blog-server-61xo.onrender.com/user/post"
      );
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container">
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}

      {/* <Post /> */}
    </div>
  );
};

export default Home;
