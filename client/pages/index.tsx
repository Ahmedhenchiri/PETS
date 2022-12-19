import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase-config.js";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({} || null);
  const [forgetPassword, setForgetPassword] = useState(false)
  const [resetEmail, setResetEmail]= useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const logOut = async () => {
    await signOut(auth);
  };
  const getUserFromDB = () => {
    axios
      .post("http://localhost:3001/user/login", {
       
        Uemail: email,
     
      })
      .then((res) => {
        console.log(res.data);
                  localStorage.setItem("user", JSON.stringify(res.data));
window.location.href='/home'
        console.log(`${email} connected `);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const loginFn = async (e: any) => {
    e.preventDefault(false);
    try {
      const Credential = await signInWithEmailAndPassword(auth, email, password);
      console.log(Credential.user);
      getUserFromDB()
      //    navigate("/home");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const sendPasswordReset = async (email : any) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  // const  getCurrentUser =() =>{
  //   if (typeof window !== 'undefined') {
  //     return JSON.parse(localStorage.getItem('user'))
  //   }
  // }
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

      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670936284/1_rdfnhm.png"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Be one of the best D&C clients
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="email"
                            value={email}
                            name="email"
                            onChange={(e: any) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            value={password}
                            name="password"
                            onChange={(e: any) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                            onClick={(e) => loginFn(e)}
                          >
                            login
                          </button>
                          <p
                            className="text-gray-500"
                            onClick={() => setForgetPassword(!forgetPassword)}
                          >
                            Forgot password?
                          </p>
                        </div>
                        {forgetPassword && (
                          <div className="text-center pt-1 mb-12 pb-1">
                            <div className="mb-4">
                              <input
                                type="text"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="email"
                                placeholder="email"
                                value={email}
                                name="email"
                                onChange={(e: any) =>
                                  setResetEmail(e.target.value)
                                }
                              />
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
                              onClick={(e) => sendPasswordReset(resetEmail)}
                            >
                              Reset password
                            </button>
                          </div>
                        )}

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link href="/signup" className="p-2 text-dark">
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-gray-600 text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              signup
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      backgroundImage:
                        "url(" +
                        "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80" +
                        ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="text-white px-4 py-6 md:p-12 md:mx-6"
                      style={{ backgroundColor: " rgb(188, 185, 160,0.4)" }}
                    >
                      <h3 className="text-xxl font-semibold mb-6">
                        We are not just a company
                      </h3>
                      <hr />

                      <h3 className="text-xxl font-semibold mb-6">
                        {" "}
                        we are animals lovers
                      </h3>
                      <p className="text-xl">
                        we hope your pets enjoy with our product and love them
                        as we do...{" "}
                      </p>
                      <ul>
                        <li>
                          <a
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            PLEASE donate for poor animals !
                          </a>
                          <br />
                        </li>
                        <li>
                          <a
                            href="https://secure.aspca.org/donate/donate?ms=wb_top_donate&initialms=wb_top_donate&pcode=WEBMEMBER&lpcode=WEBGUARD"
                            style={{
                              textDecoration: "none",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            donate for ASPCA.org
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://secured.humanesociety.org/page/116070/donate/1?ea.tracking.id=web_topnav_EOY_holidays_1222"
                            style={{
                              textDecoration: "none",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            donate for humanesociety.org
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
