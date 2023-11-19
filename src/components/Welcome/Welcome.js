import React from "react";
import { NavLink, Link } from "react-router-dom";

import './Welcome.styles.css';

const Welcome = () => {

    return (
        <div>
            <h1>Welcome</h1>
            <Link to={`/welcome/modal`} >Modal open</Link>
        </div>
    );
};

export default React.memo(Welcome);

