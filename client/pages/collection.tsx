//@ts-nocheck
import React , { useContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import AppContext from '../components/AppContext';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import Single from './oneProdect/[id]'
import Link from "next/link"
import Mycontext from './context';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase-config.js";


const collection = () => {
 const router = useRouter()
 
  const [allProducts, setAllProducts] = useState([])
  const [user, setUser] = useState({} || null);
  const [email, setEmail] = useState("");
// const Mycontext = useContext({})

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
 
 
  const filter = (para:any) => {
    axios.get(`http://localHost:5000/user/filter/${para}`).then(res => {
      console.log(res.data);
      
      setAllProducts(res.data)
    })
  }
  const filters = (para:any) => {
    axios.get(`http://localHost:5000/user/filters/${para}`).then(res => {
      console.log(res.data , "marym" );
      
      setAllProducts(res.data)
    })
  }
 
  useEffect(() => {
    axios.get("http://localHost:5000/user/getAllProduct").then(res => {
      setAllProducts(res.data)
      console.log(res.data.message);
      
    })
  }, [])
  console.log(allProducts,"ahlem");
  
  

  return (
    <div>
      
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
{/*             
            <h1>{context.user}</h1>  */}
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
         {console.log(allProducts)}
          return (
             <>
          <div  className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img id="im"
                  className="card-img rounded-0 img-fluid"
                  src={e.Pimage}
                  // onClick={()=>{}}
                  
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
                {/* <Link key={e._id}  href={'/id' }>More details</Link> */}
              <button  onClick={()=>{router.push(`/oneProdect/${e._id}`)
              }}>More details</button>
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



  
       </div>

        
  );
};

export default collection ;
