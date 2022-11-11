import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Nav from "../Components/Nav";

const Layout = () =>
{
    return(
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default Layout;