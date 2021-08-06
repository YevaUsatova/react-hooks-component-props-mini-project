import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() { 
  return (
    <div className="App">
      <Header name ={blogData.name} />
      <About props={blogData}/>
      <ArticleList article = {blogData.posts} />
      
    </div>
  );
}

export default App;
