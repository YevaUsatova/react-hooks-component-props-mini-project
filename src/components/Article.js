import React from "react";


function Article ({id, title, date, preview}){
   const small= "January 1, 1970"
    return (
        
        <article >
            <h3 key ={id}>{title}</h3>
            <small key ={id}>{date}{small}</small> 
            <p key ={id}>{preview}</p>
         </article>

    )
}
export default Article;