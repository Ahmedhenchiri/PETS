//@ts-nocheck
import React , { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

import Link from "next/link"


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
// import {signOut,} from "firebase/auth";
import { auth } from "../firebase-config.js";


const AllProduct = () => {
 const router = useRouter()
  const [allProducts, setAllProducts] = useState([])
  const [user, setUser] = useState({} || null);
  const [email, setEmail] = useState("");


  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     // router.push('/home')
  //   });
  // }, []);
  const logOut = async () => {

    await signOut(auth);
    window.location.href='/'
  };
 
 // DELETE PRODUCT
const del = (_id) => {
  axios
    .delete(`http://localhost:5000/user/deleteProduct/${_id}`)
    
    
    
    .then((res) => {
      console.log(res);
router.reload(window.location.pathname)
      //router.push("/AllProductAdmin");
    });
    
};
  // const filter = (para:any) => {
  //   axios.get(`http://localHost:5000/user/filter/${para}`).then(res => {
  //     console.log(res.data);
      
  //     setAllProducts(res.data)
  //   })
  // }
  // const filters = (para:any) => {
  //   axios.get(`http://localHost:5000/user/filters/${para}`).then(res => {
  //     console.log(res.data , "Halloum" );
      
  //     setAllProducts(res.data)
  //   })
  // }
  // const [searching,setSearching]=useState('')
  useEffect(() => {
    axios.get("http://localHost:5000/user/getAllProduct").then(res => {
      setAllProducts(res.data)
      console.log(res.data.message);
      
    })
  }, [])
  console.log(allProducts,"ahlem");
  
  

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
          {/* <Link href="/home" className="p-2 text-dark no-underline hover:underline">
            Home
          </Link> */}
        
          {/* <Link href="/collection" className="p-2 text-dark no-underline hover:underline">
            Collection
          </Link> */}

          {/* <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link> */}
          {/* <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link> */}
          {/* <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link> */}

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
       {/* <button>add</button> */}
      </nav>
      <br /><br /><br />
  
      
      <div className="row">
         
         {  allProducts && allProducts.map((e)=>{
          {console.log(allProducts)}
           return (
              <>
           <div className="col-md-4">
             <div className="card mb-4 product-wap rounded-0">
               <div className="card rounded-0">
                 <img id="im"
                   className="card-img rounded-0 img-fluid"
                   src={e.Pimage}
                   
                 />
                 
               </div>
               <div className="card-body">
                 <a id="name" href="/singlCollect" className="h3 text-decoration-none animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                 {e.Pname}
               
                 
                 </a>
                  <span> 
                    <button onClick={()=>{
                      del(e._id)}}  className="inline-block px+100 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                             type="button" 
                             data-mdb-ripple="true"
                             data-mdb-ripple-color="light"
                             style={{
                               background:
                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                             }}>Delete</button>   
                           
 
                           <Link href={"./id"}as= {`./${e._id}`} >
                              <button  className="inline-block px-3 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-70"
 
 
                             data-mdb-ripple="true"
                             data-mdb-ripple-color="light"
                             style={{
                               background:
                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                             }}>Update</button>
                             </Link>
                             </span> 
                    
                 <p className="text-center mb-0">${e.Pprice}</p>
               </div>
             </div>
           </div>
           
           </>
          
         )
       })
        
 
     
 
       
       
       }
        </div>

       
        </div>
       
        
     )}
 
        


export default AllProduct;
