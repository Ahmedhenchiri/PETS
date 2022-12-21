import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
//import NavbarAdmin from "../../NavbarAdmin";
//import Footer from "../../Footer";

const Update = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [Pname, setPname] = useState("");
  const [Ptype, setPtype] = useState("");
  const [Pcategorie, setPcategorie] = useState("");
  const [Pimage, setPimage] = useState("");
  const [Pprice, setPprice] = useState("");
  const [Pdescription, setPdescription] = useState("");
  
  console.log(data);
  //   console.log(id);
  console.log("hzr", router.query.id);
  

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
      {/* <div>
        <NavbarAdmin />
      </div> */}

      <center>
        <div className="form">
          <div className="title">Welcome Admin</div>
          <div className="subtitle">Update Product</div>
          <div className="input-container ic1">
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
            <label htmlFor="firstname" className="placeholder">
              {" "}
              Name
            </label>
          </div>
          <div className="input-container ic2">
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
            <label htmlFor="lastname" className="placeholder">
              Type
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
            <label htmlFor="lastname" className="placeholder">
              Categorie
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
            <label htmlFor="lastname" className="placeholder">
              Image
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
            <label htmlFor="lastname" className="placeholder">
              Price
            </label>
          </div>
          <div className="input-container ic2">
            <input
              className="input"
              type="text"
              placeholder="hhhh "
              onChange={(e) => {
                setPdescription(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              Description
            </label>
          </div>

          <button className="submit" onClick={() => updateelement()
          }>
            Update
          </button>
        </div>
      </center>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};
export default Update;