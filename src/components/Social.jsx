import React from "react";

const Social = (props) => {
    return(
        <li>
            <a href={props.url}>{props.icon}</a>
        </li>
    );
};

export default Social;