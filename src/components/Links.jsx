import React from "react";

const Links = (props) => {
    return(
        <li>
           <a href= {props.url}>{props.text}</a> 
        </li>
    );
};

export default Links;