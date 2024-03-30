import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContextProvider } from "./contexts/UserContext";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route path="/post/:id" element={<SinglePost />}></Route>
            <Route path="/edit/:id" element={<EditPost />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </UserContextProvider>
    </div>
  );
}

export default App;
