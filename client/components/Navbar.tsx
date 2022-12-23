import Link from 'next/link'
// import React from 'react'
import React , { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

// import Link from "next/link"


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase-config.js";

function Navbar() {
    
        const router = useRouter()
         const [allProducts, setAllProducts] = useState([])
         const [user, setUser] = useState({} || null);
         const [email, setEmail] = useState("");
       
       
         useEffect(() => {
           onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser);
             // router.push('/home')
           });
         }, []);
         
         
         const logOut = async () => {
       
           await signOut(auth);
           window.location.href='/'
         };
        
        
        //  const filter = (para:any) => {
        //    axios.get(`http://localHost:5000/user/filter/${para}`).then(res => {
        //      console.log(res.data);
             
        //      setAllProducts(res.data)
        //    })
        //  }
        //  const filters = (para:any) => {
        //    axios.get(`http://localHost:5000/user/filters/${para}`).then(res => {
        //      console.log(res.data , "marym" );
             
        //      setAllProducts(res.data)
        //    })
        //  }
         // const [searching,setSearching]=useState('')
        //  useEffect(() => {
        //    axios.get("http://localHost:5000/user/getAllProduct").then(res => {
        //      setAllProducts(res.data)
        //      console.log(res.data.message);
             
        //    })
        //  }, [])
        
        //  console.log(allProducts,"ahlem");
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

        <div>
          <Link href="/home" className="p-2 text-dark no-underline hover:underline">
            Home
          </Link>
          <Link href="/collection" className="p-2 text-dark no-underline hover:underline">
            Collection
          </Link>

          {/* <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link> */}
          <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link>
          <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link>
          {user ? (
            
             
              <Link href="" className="p-2 text-dark">
                <button onClick={()=>{
                  fetch('http://localhost:5000/user/DeleteAllProductsCart', {
                    method: 'DELETE',
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                 
                    });
                  logOut();
                } 
                                            
                     }>log out</button>
              </Link>
           
           ) : (
            <Link href="/login" className="p-2 text-dark">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
           }


export default Navbar
