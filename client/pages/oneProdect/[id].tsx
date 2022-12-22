//@ts-nocheck
import React,{useState,useEffect, useContext} from 'react'
import Link from "next/link"
import axios from 'axios'
import collection from '../collection'
import Mycontext from '../context'
import { useRouter } from 'next/router'
const singlCollect = ({e}:any) => {
//  const context = useContext(Mycontext)

const router = useRouter() ;
const ID = router.query.id
const [result,setResult] = useState({})
   useEffect(()=>{  
    axios.get(`http://localhost:5000/user/oneproduct/${ID}`)
    .then((res)=>{
     setResult(res.data[0])
    
    })
  },[])
 
  console.log('ressuuuult',result);

 
  
  return (
    <div>

<>
  {/* Open Content */}
  <section className="bg-light">
    <div className="container pb-5">
      <div className="row">
        <div className="col-lg-5 mt-5">
          <div className="card mb-3">
            <img
              className="card-img img-fluid"
              src={result.Pimage}
              alt="Card image cap"
              id="product-detail"
            />
          </div>
          <div className="row">
            {/*Start Controls*/}
            <div className="col-1 align-self-center">
              <a href="#multi-item-example" role="button" data-bs-slide="prev">
                <i className="text-dark fas fa-chevron-left" />
                
                
              </a>
             </div>
            {/*End Controls*/}
            {/*Start Carousel Wrapper*/}
            <div
              id="multi-item-example"
              className="col-10 carousel slide carousel-multi-item"
              data-bs-ride="carousel"
            >
             
              {/*Start Slides*/}
              <div className="carousel-inner product-links-wap" role="listbox">
                {/*First slide*/}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src={result.Pimage}
                          alt="Product Image 1"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src={result.Pimage}
                          alt="Product Image 2"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src={result.Pimage}
                          alt="Product Image 3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/*/.First slide*/}
                {/*Second slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                       src={result.Pimage}
                          alt="Product Image 4"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src={result.Pimage}
                          alt="Product Image 5"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src={result.Pimage}
                          alt="Product Image 6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/*/.Second slide*/}
                {/*Third slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-4">
                      <a href="#">
                        <img
                          className="card-img img-fluid"
                          src={result.Pimage}
                          alt="Product Image 7"
                        />
                      </a>
                    </div>
                
                  </div>
                </div>
                {/*/.Third slide*/}
              </div>
              {/*End Slides*/}
            </div>
            {/*End Carousel Wrapper*/}
            {/*Start Controls*/}
            <div className="col-1 align-self-center">
              <a href="#multi-item-example" role="button" data-bs-slide="next">
                <i className="text-dark fas fa-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/*End Controls*/}
          </div>
        </div>
        {/* col end */}
        <div className="col-lg-7 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="h3 text-decoration-none animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black" >BLINGO</h1>
              <p className="h3 py-2" >{result.Pname}</p>
              <p className="h3 py-2" >{result.Pprice}</p>

              <p className="py-2 ">
 

                <i className="fa fa-star text-secondary" />
                <span className="list-inline-item text-dark">
                  Rating 4.8 | 36 Comments
                </span>
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <h6>Brand:</h6>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted">
                    <strong>Easy Wear</strong>
                  </p>
                </li>
              </ul>
              <h6>Description:</h6>
              <p>
              {result.Pdesciption}
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <h6>Avaliable Color :</h6>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted">
                    <strong>White / Black</strong>
                  </p>
                </li>
              </ul>
           
              <form action="" method="GET">
                <input
                  type="hidden"
                  name="product-title"
                  defaultValue="Activewear"
                />
                <div className="row">
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item">
                        Size :
                        <input
                          type="hidden"
                          name="product-size"
                          id="product-size"
                          defaultValue="S"
                        />
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-size" >S</span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">M</span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">L</span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">XL</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item text-right">
                        Quantity
                        <input
                          type="hidden"
                          name="product-quanity"
                          id="product-quanity"
                          defaultValue={1}
                        />
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success" id="btn-minus">
                          -
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge bg-secondary" id="var-value">
                          1
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success" id="btn-plus">
                          +
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col d-grid">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg"
                      name="submit"
                      value="buy"
                    >
                      Buy
                    </button>
                  </div>
                  <div className="col d-grid">
                    <a
                      type="submit"
                      className="btn btn-success btn-lg"
                      
                      
                      href='/cart/cart'
                      
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Close Content */}
</>






    </div>
  )
}

export default singlCollect