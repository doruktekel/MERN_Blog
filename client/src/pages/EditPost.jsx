import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../Editor";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5005/user/post/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setSummary(data.summary);
      setContent(data.content);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }

    const response = await fetch("http://localhost:5005/user/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      navigate(`/post/${id}`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleUpdatePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input type="file" onChange={(e) => setFiles(e.target.files)} />
        <Editor value={content} onChange={setContent} />
        <button>Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
