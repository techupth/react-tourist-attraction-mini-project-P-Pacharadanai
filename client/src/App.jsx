import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BlogPosts from "./components/BlogPosts";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [findPost, setFindPost] = useState("");
  const [postList, setPostList] = useState([]);

  const getBlogPost = async () => {
    const result = await axios.get(`http://localhost:4001/trips?keywords=${findPost}`);
    setPostList(result.data.data);
  };

  useEffect(() => {
    getBlogPost();
  }, [findPost]);

  return (
    <div className="App">
      <Header></Header>
      <SearchBar findPostState={findPost} setFindPostState={setFindPost}></SearchBar>
      <BlogPosts postListState={postList} findPostState={findPost} setFindPostState={setFindPost}></BlogPosts>
    </div>
  );
}

export default App;
