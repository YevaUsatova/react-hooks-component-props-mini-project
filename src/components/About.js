import React from "react";

function About (props){
    console.log(props)
    const newimage="https://via.placeholder.com/215"
    return(
        <aside>
            <img src={props.image} alt='blog logo'>{newimage}</img> 
            <p>{props.about}</p>
        </aside>
    )
}
 export default About;