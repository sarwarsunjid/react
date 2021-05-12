import React from 'react'

export const Home = () => {
    return (
        <div>
            
    {/* <!-- Hero Area Start--> */}
    {/* <!-- Hero Area Start--> */}
        <div className="slider-area hero-overly">
            <div className="single-slider hero-overly  slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9">
                            {/* <!-- Hero Caption --> */}
                            <div className="hero__caption">
                                <span>Explore the city</span>
                                <h1>Discover Great Places</h1>
                            </div>
                            {/* <!--Hero form --> */}
                            <form action="#" className="search-box">
                                <div className="input-form">
                                    <input type="text" placeholder="What are you looking for?" />
                                </div>
                                <div className="select-box">
                                    <div className="select-itms">
                                        <select name="select" id="select1">
                                            <option value="">All Catagories</option>
                                            <option value="">Catagories One</option>
                                            <option value="">Catagories Two</option>
                                            <option value="">Catagories Three</option>
                                            <option value="">Catagories Four</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="search-form">
                                    <a href="#">Search</a>
                                </div>	
                            </form>	
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <!--Hero Area End--> */}
        {/* <!-- Popular Locations Start --> */}
        <div className="popular-location section-padding30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle text-center mb-80">
                            <span>Most visited places</span>
                            <h2>Popular Locations</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-location mb-30">
                            <div className="location-img">
                                <img src="assets/img/gallery/location1.png" alt=""/>
                            </div>
                            <div className="location-details">
                                <p>New York</p>
                                <a href="#" className="location-btn">65 <i className="ti-plus"></i> Location</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-location mb-30">
                            <div className="location-img">
                                <img src="assets/img/gallery/location2.png" alt=""/>
                            </div>
                            <div className="location-details">
                                <p>Paris</p>
                                <a href="#" className="location-btn">60 <i className="ti-plus"></i> Location</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-location mb-30">
                            <div className="location-img">
                                <img src="assets/img/gallery/location3.png" alt=""/>
                            </div>
                            <div className="location-details">
                                <p>Rome</p>
                                <a href="#" className="location-btn">50 <i className="ti-plus"></i> Location</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-location mb-30">
                            <div className="location-img">
                                <img src="assets/img/gallery/location4.png" alt=""/>
                            </div>
                            <div className="location-details">
                                <p>Italy</p>
                                <a href="#" className="location-btn">28 <i className="ti-plus"></i> Location</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-location mb-30">
                            <div className="location-img">
                                <img src="assets/img/gallery/location5.png" alt=""/>
                            </div>
                            <div className="location-details">
                                <p>Nepal</p>
                                <a href="#" className="location-btn">99 <i className="ti-plus"></i> Location</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-location mb-30">
                            <div className="location-img">
                                <img src="assets/img/gallery/location6.png" alt=""/>
                            </div>
                            <div className="location-details">
                                <p>indonesia</p>
                                <a href="#" className="location-btn">78 <i className="ti-plus"></i> Location</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- More Btn --> */}
                <div className="row justify-content-center">
                    <div className="room-btn pt-20">
                        <a href="catagori.html" className="btn view-btn1">View All Places</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Popular Locations End --> */}
        {/* <!-- Services Area Start --> */}
        <div className="services-area pt-150 pb-150 section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle section-tittle2 text-center mb-80">
                            <span>Easy to explore</span>
                            <h2>How It Works</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-services text-center mb-50">
                            <div className="services-icon">
                                <span className="flaticon-list"></span>
                            </div>
                            <div className="services-cap">
                                <h5><a href="#">1. Choose a Category</a></h5>
                                <p>incidid labore lore magna aliqua uisipsum suspendis loris.</p>
                            </div>
                            {/* <!-- Shpape --> */}
                            <img className="shape1 d-none d-lg-block" src="assets/img/icon/serices1.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-services text-center mb-50">
                            <div className="services-icon">
                                <span className="flaticon-problem"></span>
                            </div>
                            <div className="services-cap">
                                <h5><a href="#">2. what you want</a></h5>
                                <p>incidid labore lore magna aliqua uisipsum suspendis loris.</p>
                            </div>
                            <img className="shape2 d-none d-lg-block" src="assets/img/icon/serices2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-services text-center mb-50">
                            <div className="services-icon">
                                <span className="flaticon-respect"></span>
                            </div>
                            <div className="services-cap">
                                <h5><a href="#">3. Go out & Explore</a></h5>
                                <p>incidid labore lore magna aliqua uisipsum suspendis loris.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services Area End --> */}
        {/* <!-- Categories Area Start --> */}
        <div className="categories-area section-padding30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle text-center mb-80">
                            <span>We are offering for you</span>
                            <h2>Featured Categories</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-bed"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="catagori.html">Leving Hotel</a></h5>
                                <p>Must explain your how this keind denoun pleasure</p>
                                <a href="catagori.html">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-drink"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="catagori.html">Night Life</a></h5>
                                <p>Must explain your how this keind denoun pleasure</p>
                                <a href="catagori.html">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-home"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="catagori.html">Culture Place</a></h5>
                                <p>Must explain your how this keind denoun pleasure</p>
                                <a href="catagori.html">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-food"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="catagori.html">Resturent</a></h5>
                                <p>Must explain your how this keind denoun pleasure</p>
                                <a href="catagori.html">View Details</a>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        {/* <!-- Categories Area End --> */}
        {/* <!-- peoples-visit Start --> */}
         <div className="peoples-visit dining-padding-top">
            {/* <!-- Single Left img --> */}
            <div className="single-visit left-img">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8">
                            <div className="visit-caption">
                                <span>We are offering for you</span>
                                <h3>Every Month, Millions of People 
                                    visit this site We’ve Built.</h3>
                                <p>Unlike what its name implies, dry cleaning is not actually a 'dry' process. Clothes are soaked in a different solvent.</p>
                                {/* <!--Single Visit categories --> */}
                                <div className="visit-categories mb-40">
                                    <div className="visit-location">
                                        <span className="flaticon-travel"></span>
                                    </div>
                                    <div className="visit-cap">
                                        <h4>Great places in the world</h4>
                                        <p>Unlike what its name implies, dry cleaning is not actu  process. Clothes soaked differentent.
                                        </p>
                                    </div>
                                </div>
                                {/* <!--Single Visit categories --> */}
                                <div className="visit-categories">
                                    <div className="visit-location">
                                        <span className="flaticon-work"></span>
                                    </div>
                                    <div className="visit-cap">
                                        <h4>Biggest category listing</h4>
                                        <p>Unlike what its name implies, dry cleaning is not actu  process. Clothes soaked differentent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- peoples-visit End --> */}
        {/* <!-- Testimonial Start --> */}
        <div className="testimonial-area testimonial-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle text-center mb-80">
                            <span>Our client testimonials</span>
                            <h2>What our client say</h2>
                        </div> 
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-11 col-md-11">
                        <div className="h1-testimonial-active">
                            {/* <!-- Single Testimonial --> */}
                            <div className="single-testimonial text-center">
                                {/* <!-- Testimonial Content --> */}
                                <div className="testimonial-caption ">
                                    <div className="testimonial-top-cap">
                                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                                    </div>
                                    {/* <!-- founder --> */}
                                    <div className="testimonial-founder d-flex align-items-center justify-content-center mb-30">
                                        <div className="founder-img">
                                            <img src="assets/img/testmonial/Homepage_testi.png" alt=""/>
                                        </div>
                                        <div className="founder-text">
                                            <span>Oliva jems</span>
                                            <p>UIX designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial --> */}
                            <div className="single-testimonial text-center">
                                {/* <!-- Testimonial Content --> */}
                                <div className="testimonial-caption ">
                                    <div className="testimonial-top-cap">
                                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis por incididunt ut labore et dolore mas. </p>
                                    </div>
                                    {/* <!-- founder --> */}
                                    <div className="testimonial-founder d-flex align-items-center justify-content-center mb-30">
                                        <div className="founder-img">
                                            <img src="assets/img/testmonial/Homepage_testi.png" alt=""/>
                                        </div>
                                        <div className="founder-text">
                                            <span>Oliva jems</span>
                                            <p>UIX designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}
        {/* <!-- Subscribe Area Start --> */}
        <div className="subscribe-area section-bg pt-150 pb-150" data-background="assets/img/gallery/section_bg04.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle section-tittle2 text-center mb-40">
                            <span>Subscribe out newslatter</span>
                            <h2>Subscribe For Newsletter</h2>
                        </div> 
                        {/* <!--Hero form --> */}
                        <form action="#" className="search-box">
                            <div className="input-form">
                                <input type="text" placeholder="What are you looking for?"/>
                            </div>
                            <div className="search-form">
                                <a href="#">Send Now</a>
                            </div>	
                        </form>	
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Subscribe Area End -->
        <!-- Blog Ara Start --> */}
        <div className="home-blog-area section-padding30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle text-center mb-70">
                            <span>Our blog</span>
                            <h2>News and tips</h2>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/home_blog1.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <span>HEALTH & CARE</span>
                                <h3><a href="blog.html">The Best SPA Salons For
                                    Your Relaxation</a></h3>
                                <p>October 6, 2020by Steve</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/home_blog2.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <span>HEALTH & CARE</span>
                                <h3><a href="blog.html">The Best SPA Salons For
                                    Your Relaxation</a></h3>
                                <p>October 6, 2020by Steve</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/home_blog3.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <span>HEALTH & CARE</span>
                                <h3><a href="blog.html">The Best SPA Salons For
                                    Your Relaxation</a></h3>
                                <p>October 6, 2020by Steve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog Ara End --> */}

    
    
    {/* <!-- Scroll Up --> */}
    <div id="back-top" >
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div>
        
        </div>
        
    )
}

export default Home;