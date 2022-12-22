import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"

import {signOut,} from "firebase/auth";

const Update = () => {
  const router = useRouter();
  //const [data, setData] = useState([]);
  const [Pname, setPname] = useState("");
  const [Ptype, setPtype] = useState("");
  const [Pcategorie, setPcategorie] = useState("");
  const [Pimage, setPimage] = useState("");
  const [Pprice, setPprice] = useState("");
  const [user, setUser] = useState({} || null);
  const [Pdescription, setPdescription] = useState("");

  const logOut = async () => {

    await signOut(auth);
    window.location.href='/'
  };
  
  const updateelement = () => {
    axios
      .put(`http://localhost:5000/user/updateOneProduct/${router.query.id}`, {
        Pname:Pname,
        Ptype:Ptype,
        Pcategorie:Pcategorie,
        Pimage:Pimage,
        Pprice:Pprice,
        Pdescription:Pdescription,
      })
      .then((res) => {
        console.log(res);
        console.log("yes updated");
        
        router.push("/admin");
      });
  };

  return (
    <div>
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
          <h6 >ADMIN</h6>

        <div>
         

          {user ? (
            <div>
               <Link href="/addProduct" className="p-2 text-dark no-underline hover:underline">
            Add Product
          </Link> 
        
              <Link href="" className="p-2 text-dark">
                <button onClick={logOut}>log out</button>
              </Link>
            </div>
          ) : ( 
            <Link href="/login" className="p-2 text-dark">
              Login
            </Link>
           )} 

        </div>
      
      </nav>
      <br /><br /><br />

      <center>
        <div className="form">
          <div className="title">Welcome Admin</div>
          <div className="subtitle">Update Product</div>
          <div className="input-container ic1" ><label calssName="name">Name:</label>
            <input 
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPname(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="firstname" >
              
              Type:
            </label>
          </div>
          <div className="input-container ic2"><br></br>
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPtype(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="name">
              Categorie:
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPcategorie(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="name">
              Image:
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPimage(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="name">
              Price:
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPprice(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="name">
              Description:
            </label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPdescription(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
             
            </label>
          </div>

          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                            onClick={() => updateelement()}
                          >
                            Update 
                          </button>
        </div>
      </center>
     
    </div>
  );
};
export default Update;