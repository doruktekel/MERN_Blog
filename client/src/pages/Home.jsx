import React, { useEffect, useState } from "react";
import Post from "../Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchdata = async () => {
    const res = await fetch("http://localhost:5005/user/post");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container">
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}

      {/* <Post /> */}
    </div>
  );
};

export default Home;
