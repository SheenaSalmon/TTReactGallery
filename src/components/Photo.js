import React from "react";


const Photo=(props) =>
{
    return(
 <li  >
     <img key={`${props.id}`} src ={props.src}  alt ={props.alt}/>  
      </li>
    );
}

export default Photo;

