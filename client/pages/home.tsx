import React , { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import SimpleImageSlider from "react-simple-image-slider";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase-config.js";
import axios from "axios";


const images = [
  { url: "https://blogs-images.forbes.com/ceciliarodriguez/files/2018/01/moncler-dog-jackets-mondog-.jpg" },
  { url: "https://media.gucci.com/content/DiaryHeroArticle_Standard_1600x812/1655895611/DiaryHeroArticle_Gucci-Pet-Collection-01_001_Default.jpg" },
  { url: "https://powerofthepaw.org/wp-content/uploads/2021/02/4-870x400.jpeg" },
  { url: "https://www.foundanimals.org/wp-content/uploads/2019/01/pet-accessories.jpg" },
  { url: "https://www.k9ofmine.com/wp-content/uploads/2021/12/dog-modeling-jobs.jpg" },

  
];
// const user = useContext(UserContext)
const home = () => {
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


  return (
    <>
 <div> 
          <div className='grid  place-items-center'>
      <SimpleImageSlider
        width={1600}
        height={580}
        images={images}
        showBullets={true}
        showNavs={true}
        
      />
    </div>
{/* <h1>{user}</h1> */}

    </div>


    {/* <!-- Start Categories of The Month --> */}
    <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Show your pet the love that he deserve</h1>
                <p>
                    
                </p>
            </div>
        </div>

        <div className='justify-content-center'>
        <div className="row justify-content-center">
            <div className="col-10 col-md-3 p-5 mt-3">
                <a href="#"><img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671116336/2022-Holiday-P1-HolidayShop-Dog-Deals_hd0lgp.jpg" className="rounded-circle img-fluid border"/></a>
                <h5 className="text-center mt-3 mb-3" style={{width:"224px"}}>Dogs</h5>
                <p className="text-center"><a className="btn btn-success  "href='/collection' >Go Shop</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#"><img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671116391/2022-Holiday-P1-HolidayShop-Cat-Deals_nvknns.jpg" className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3" style={{width:"224px"}}>Cats</h2>
                <p className="text-center"><a className="btn btn-success" href='/collection'>Go Shop</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#"><img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671116957/2022-Holiday-P1-HolidayShop-ExploreMore_nswhdh.jpg" className="rounded-circle img-fluid border"/></a>
                <h2 className="h5 text-center mt-3 mb-3" style={{width:"224px"}}>Accessories</h2>
                <p className="text-center"><a className="btn btn-success" href='/collection'>Go Shop</a></p>
            </div>
        </div>
        </div>
    </section>
    {/* <!-- End Categories of The Month --> */}
     </>
  )
}

export default home
