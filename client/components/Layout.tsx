import React from "react";
import Head from "next/head";
import Link from "next/link";

import Fouter from "./Fouter";
import Navbar from "./Navbar";


const Layout = ({  children }:any) => {
  return (

    <div>
    <Navbar />
    {children}
    <Fouter/>
    </div>

   
  );
};

export default Layout;


