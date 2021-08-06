import React from "react";
import Article from "./Article";

function ArticleList ({article}){   
    
    return (
        <main> {article}.map(art){
        <Article 
        key={art.key}
        date={art.date}
        title={art.title} 
        preview={art.preview}
        />  }) </main>
    )
}
export default ArticleList;