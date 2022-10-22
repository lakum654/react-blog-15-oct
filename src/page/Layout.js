import React from 'react'
import { Link } from 'react-router-dom';
import headerBg from '../image/header-bg.jpg';

export const Navbar  = (props) => {
    return (
       <>
         <nav class="navbar navbar-expand-sm navbar-dark theme-color fixed-top shadow-1">
             <div class="container">
             <a class="navbar-brand" href="#">Navbar</a>
             <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="collapsibleNavId">
               <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                 <li class="nav-item">
                   <Link class="nav-link active" to="/home" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link" href="#">Blogs</a>
                 </li>
                 <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                   <div class="dropdown-menu rounded-0" aria-labelledby="dropdownId">
                     <a class="dropdown-item" href="#">Action 1</a>
                     <a class="dropdown-item" href="#">Action 2</a>
                   </div>
                 </li>
               </ul>
               <form class="d-flex my-2 my-lg-0">
                 <input class="form-control me-sm-2 rounded-0" type="text" placeholder="Search" />
                 <button class="btn btn-outline-success my-2 my-sm-0 rounded-0" type="submit">Search</button>
               </form>
             </div>
           </div>
         </nav>
 
         <Header title={props.title}/>
       </>
    )
 }
 
 export const Header = (props) => {
   const bgStyle={
     backgroundImage:`url(${headerBg})`,
     backgroundSize: 'cover',
     backgroundPosition: 'bottom',
     backgroundRepeat: 'no-repeat',
     height:'300px',
     opacity:'0.9',
     color: 'white'
 };
   return (
     <>
       <div className="header py-5 my-5" style={bgStyle}>
           <h2 className='text-center'>
               {props.title}
           </h2>

           <h6 className='text-center'>
                <span>Blog / Single</span>
           </h6>
       </div>
     </>
   )
 }
 
 export const Footer = () => {
   return (
     <>
       <div className='footer theme-color'>
       </div>
     </>
   );
 }
