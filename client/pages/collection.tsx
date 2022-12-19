import React , { useEffect, useState } from 'react'


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
import { auth } from "../firebase-config.js";


const collection = () => {

  const [allProducts, setAllProducts] = useState([])
  const [user, setUser] = useState({} || null);
  const [email, setEmail] = useState("");


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
  }, []);
  const logOut = async () => {

    await signOut(auth);
    window.location.href='/'
  };
 
 
  const filter = (para) => {
    axios.get(`http://localHost:3001/user/filter/${para}`).then(res => {
      console.log(res.data);
      
      setAllProducts(res.data)
    })
  }
  const filters = (para) => {
    axios.get(`http://localHost:3001/user/filters/${para}`).then(res => {
      console.log(res.data , "marym" );
      
      setAllProducts(res.data)
    })
  }
  // const [searching,setSearching]=useState('')
  useEffect(() => {
    axios.get("http://localHost:3001/user/getAllProduct").then(res => {
      setAllProducts(res.data)
    })
  }, [])
  console.log(allProducts,"aziz");
  
  

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

          <Link href="/store" className="p-2 text-dark no-underline hover:underline">
            Store
          </Link>
          <Link href="/cart" className="p-2 text-dark no-underline hover:underline">
            cart
          </Link>
          <Link href="/aboutus" className="p-2 text-dark no-underline hover:underline">
            About us
          </Link>
          {user ? (
            <div>
              
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
     
       <div className="h-175 d-flex align-items-center justify-content-center" >
            <div className='row align-items-center'>
      
      <div className='col'>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">BLACK FRIDAY SALE</h1>
<h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">UP TO 90% OFF</h1>
<h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">WELCOME!</h1>

        </div> 
      <div className="col">
      <img src="https://octanecdn.com/forevervetscom/forevervetscom_679279103.gif" alt="" />
    </div>
    
      </div>



      </div>



      <>
  {/* Start Content */}
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-3">
        <h1 id="catego" className="h2 pb-4">Categories</h1>
        <ul className="list-unstyled templatemo-accordion">
          
          <li className="pb-3">
            <button id="categories"
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
              onClick={() => {
                filters("coats&jackets")
              }}
            >
              coats&jackets
              
            </button>
            
            
          </li>
          <li className="pb-3">
            <button id="categories"
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
              onClick={() => {
                filters("sweaters&hoodies")
              }}
            >
              sweaters&hoodies
              
            </button>
            
          </li>
          <li className="pb-3">
            <button id="categories"
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
              onClick={() => {
                filters("shirts&dresses")
              }}
            >
              shirts&dresses
              
            </button>
            
          </li>
          <li className="pb-3">
            <button id="categories"
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
            
              onClick={() => {
                filters("accessories")
              }}

            >
              accessories
              
            </button>
            
          </li>
        </ul>
      </div>
      <div className="col-lg-9">
        <div className="row">
          
          <div className="col-md-6 pb-4">
            <div className="d-flex">
              <select className="form-control" onChange={(e)=>{
                 filter(e.target.value)
              }}> 
                <option id="catego">click and choose the pet :</option>
                <option 
                 
                >dogs</option>
                <option
                
                >cats</option>
                <option
               
                >kittens</option>
                <option
               
                >puppies</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">

        {  allProducts && allProducts.map((e)=>{
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
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                 
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
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
    </div>
  </div>
  {/* End Content */}
</>


<footer className="relative bg-blueGray-200 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg> </button><button className="bg-white text-lightBlue-600 shadow-lg font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></button><button className="bg-white text-pink-400 shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dribbble" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
</svg></button><button className="bg-white text-blueGray-800 shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2022</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"/> Notus JS by
          wiem & aziz & houssem
        </div>
      </div>
    </div>
  </div>
</footer>











      
      {/* <div> */}
        {/* <div className="row justify-content-center"> */}
                    {/* <div className="col-4">
            <div className=" animate-box" data-animate-effect="fadeInRight">
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4 font-serif text-base italic font-semibold rounded-full" >
                  
                </div>
              </div>
              <div className="clearfix" />
              <div className="fh5co_tags_all">
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("cats")
                  }}
                >
                  cats
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("dogs")
                  }}
                >
                  dogs
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("kittens")
                  }}
                >
                  kittens
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filter("puppies")
                  }}
                >
                  puppies
                </button>
              </div>
              <div></div>
            </div>
          </div> */}
          {/* <div className="col-4">
            <div className=" animate-box" data-animate-effect="fadeInRight">
              <div>
                <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4 font-serif text-base italic font-semibold rounded-full ">
                  
                </div>
              </div>
              <div className="clearfix" />
              <div className="fh5co_tags_all">
              <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("coats&jackets")
                  }}
                >
                  coats&jackets
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("sweaters&hoodies")
                  }}
                  
                >
                  sweaters&hoodies
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("shirts&dresses")
                  }}
                  
                >
                  shirts&dresses
                </button>
                <button
                  
                  className="fh5co_tagg rounded-full"
                  style={{
                    background: "#f1f1f1",
                    padding: "10px 15px",
                    color: "#222",
                    marginRight: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    display: "inline-block",
                  }}
                  onClick={() => {
                    filters("accessories")
                  }}
                >
                
                  accessories
                </button>
              </div>
              <div></div>
            </div>
          </div> */}
        {/* </div> */}



      {/* <div className="container">
       <div className="row">

        {  allProducts && allProducts.map((e)=>{
          return ( 
            
            <div className="col col-sm-6 col-lg-4">
            <a href="#" className="relative group" style={{ width: "336px", height: "216" }}>
              <button
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
            
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            
              <img
                src={e.Pimage}
                alt=""
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
                style={{ width: "336px", height: "216" }}
              />
            
              <div className="relative p-6 bg-white border border-gray-100 no-underline">
               
            
                <h3 id="name" className="mt-4 text-lg font-medium text-gray-900 no-underline" onClick={()=>{

                }} >{e.Pname}</h3>
               
                
                
            
                <p className="mt-1.5 text-sm text-gray-700">{e.Pprice}$</p>
            
                {/* <form className="mt-4"> */}
                  {/* <button id="mybutton"
                    className=" w-full p-4 text-sm font-medium transition bg-yellow-400 rounded "
                  >
                    Add to Cart
                  </button> */}
                {/* </form> */}
              {/* </div> */}
            {/* </a> */}
                      
                    {/* </div> */}

    
          {/* )
        })
         

      

        
        
        }
         */}
      
       </div>
      
             



              
            //   </div>
            // </div>
        
  );
};

export default collection;
