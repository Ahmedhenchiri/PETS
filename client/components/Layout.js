import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (

    <div>
    <Head>
    <title>{title? title + ' - HuGe':'D&C'}</title>
    <meta name="description" content="Ecommerce Website" />
    {/* <Link rel="icon" href="/" /> */}
  </Head>

    <div className='flex min-h-screen flex-col justify-between'>
        <header>
        <nav
        className="relative flex h-12 items-center px-4 justify-between shadow-md dark:shadow-gray-700"
        style={{ height: "70px" }}
      >
        <img
          src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670936284/1_rdfnhm.png"
          className="logo"
          style={{ width: "200px", height: "170px" }}
          alt=""
        />

        <div>
          <Link href="/" className="p-2 text-dark no-underline hover:underline">
            Home
          </Link>
          <Link href="/collection" className="p-2 text-dark no-underline hover:underline">
            Collection
          </Link>

          <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link>
          <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link>
          <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link>
          <Link href="/login" className="p-2 text-dark no-underline hover:underline">
            Login
          </Link>
        </div>
      </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
    </div>

   </div>
  );
};

export default Layout;


