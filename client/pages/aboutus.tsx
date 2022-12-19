import React , { useEffect, useState } from 'react'
import Link from "next/link"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase-config.js";


const aboutus = () => {



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
    <div>
      {/* <nav
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
      </nav> */}
          <>
          <center>
  <div className="about-section">
    <h1>About Us</h1>
    <p >DOG and CATS </p>
    <p>
      
With more than 160 own range references and 2000 catalog references, Our Animal Shop has distinguished itself by developing a varied and quality offer that meets the needs of owners of dogs, cats, rodents, rodents. Our company is today a benchmark in the market for well-being products for pets.
has a more-or-less normal distribution of letters as opposed to using content here
its making it look like readable.
    </p>
  </div>
  </center>
  <h2 style={{ textAlign: "center" }}>Our Team</h2>
  <div className="row">
    <div className="col col-sm-6 col-lg-4">
      <div className="card">
        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671182537/me_kosu6u.jpg" alt="Jane" style={{ width: "418.4px" , height:"418.4px"}} />
        <div className="container">
          <h2>Wiem Mimouni</h2>
          <p className="title">CEO &amp; Founder</p>
          <p>+216 52.444.441</p>
          <p>WiemMimouni@gmail.com</p>
          <p>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>

	contact
  </button>
          </p>
        </div>
      </div>
    </div>
    <div className="col col-sm-6 col-lg-4">
      <div className="card">
        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671182573/T038H78Q62W-U039H7T0Q80-cabb8844dfce-512_p8odu0.jpg" alt="Mike" style={{ width: "418.4px" , height:"418.4px" }} />
        <div className="container">
          <h2>Houssem Hmidi</h2>
          <p className="title">Art Director</p>
          <p>+216 52.444.442</p>
          <p>Housem.Hmidi@gmail.com</p>
          <p>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>

	contact
  </button>
          </p>
        </div>
      </div>
    </div>
    <div className="col col-sm-6 col-lg-4">
      <div className="card">
        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671182446/IMG_0168_uuvouj.jpg" alt="John" style={{ width: "418.4px" , height:"418.4px"}} />
        <div className="container">
          <h2>Med Aziz Selini</h2>
          <p className="title">Designer</p>
          <p>+216 52.444.443</p>
          <p>AzizSelini@gmail.com</p>
          <p>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>

	contact
  </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</>













 

    </div>





   


  )
}

export default aboutus