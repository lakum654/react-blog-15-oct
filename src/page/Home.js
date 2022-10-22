import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Home = () => {

  return (
    <>
      <Blog />
    </>
  )
}

const Blog = () => {
  return (<>
    <div className='container main-container'>
      <div className="row">
        {
          [1, 2, 3, 5, 6, 7, 8,].map((index, no) => {
            return (
              <div className="col-sm-12 col-lg-4 col-xl-4 col-md-6">
                <div className="card rounded-0">
                  <img src="https://mdbootstrap.com/img/new/fluid/city/113.webp" className="card-img-top rounded-0 p-3" alt="..." />
                  <div className="card-body">
                    <div className="sub-title d-flex justify-content-around">
                      <span className='badge bg-primary'>Category</span>
                      <span className='badge bg-info'>{index} Comments</span>
                      <span className='badge bg-success' >28th January</span>
                    </div>

                    <h5 className="card-title my-2">Improve The Design With Typegrapy</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`../blog/${index}`} className="btn btn-success btn-info text-white"> Learn More</Link>
                  </div>
                </div><br />
              </div>
            )
          })
        }
      </div>
    </div>
  </>)
}
export default Home