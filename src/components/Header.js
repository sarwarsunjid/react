import React from 'react'

import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <header>
        {/* <!-- Header Start --> */}
       <div class="header-area header-transparent">
            <div class="main-header">
               <div class="header-bottom  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div class="col-xl-2 col-lg-2 col-md-1">
                                <div class="logo">
                                  <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-8">
                                {/* <!-- Main-menu --> */}
                                <div class="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">                                                                                                                                     
                                            <li>
                                            <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li><Link to="/categories">Categories</Link></li>
                                            <li><Link to="/listing">listing</Link></li>
                                            {/* <li><a href="#">Page</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog_details.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="listing_details.html">Listing details</a></li>
                                                </ul>
                                            </li> */}
                                            <li><Link to="/contact">Contact</Link></li>
                                            <li class="add-list"><a href="listing_details.html"><i class="ti-plus"></i> add Listing</a></li>
                                            <li class="login"><a href="#">
                                                <i class="ti-user"></i> Sign in or Register</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* <!-- Mobile Menu --> */}
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
        {/* <!-- Header End --> */}
    </header>
        </div>
    )
}

export default Header;