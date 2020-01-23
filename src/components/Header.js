import React, { Fragment } from "react";

const Header = (props) => (
    <header>
        <h1>{props.titulo}</h1>
        <p>{props.pendiente}</p>
    </header>
);

export default Header;

