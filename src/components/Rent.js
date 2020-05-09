import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Rent=()=>{
    return(
        <div>
            <div className="bar">
            <div className="bar1">
                <div className="bar2"><i class="fas fa-phone-alt"></i><h6 className="num">+234 (0) 894820401</h6></div>
                <div className="bar3"><i class="far fa-envelope"></i><Link to='/cont1'><h6 className="enq" >Contact Us</h6></Link></div>
                </div>
            </div>
            <div className="car" >
            <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" alt="Moov" width="180px" height="80px"/>
            <Nav className="mr-auto">    
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/cargo'>Cargo Delivery</Link>
                <Link className="nav-link" to='/rent'>Rent a Van</Link>
                <a className="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                <Link className="nav-link" to='/deals'>Deals</Link>
                <Link className="nav-link" to='/hail1'>Hail a Repair</Link>
                <a className="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
                <a className="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
                {/* <div className="vl"></div>
                <Link id="ser" to='/search'><i class="fas fa-search"></i></Link> */}
            </Nav>  
        </Navbar.Collapse>
        </Navbar>
        </div>
                <div className="rent1">
                    <div className="rent2">
                        <h6 id="ava">Available Jan - Dec</h6>
                        <h1 id="ree">Rent 'A' Van</h1>
                        <h1 id="ree1">from</h1>
                        <h1 id="ree">Moov Africa</h1> 
                        <h6 id="wee">We operate within the axis of South-south, South-East, South West of Nigeria.</h6>
                      <div className="conn">
                        <div className="conn1"><h6 id="con">Contact us</h6></div>
                        <div className="conn2"><i class="fas fa-arrow-alt-circle-right"></i></div>
                      </div>
                    </div>
                    <div className="rent3">
                        <img src="./images/trans3.jpg"
                             alt="truck"
                             width="500px"
                             height="300px"
                        />
                    </div>        
                </div> 
        <section>
                <div className="container">
                    <div className="row ">
                    <div className="pe col-sm-10 col-lg-4 offset-sm-1 offset-lg-0 ">
                        <div className="pee mx-auto">
                            <img className="bl" 
                                src="./images/truck17.jpeg"
                                alt="moov africa"
                            />
                        </div>
                    </div>
                    <div className="pe  col-sm-10 col-lg-4 offset-sm-1 offset-lg-0">
                        <div className="pee mx-auto">
                            <img className="bl" 
                                src="./images/truckxx.jpg"
                                alt="moov africa"     
                            />
                        </div>
                    </div>
                    <div className="pe col-sm-10 col-lg-4 offset-sm-1 offset-lg-0 ">
                        <div className="pee mx-auto">
                        <img className="bl" 
                            src="./images/cargox3.jpg"
                            alt="moov africa "   
                        />
                    </div>
                    </div>
                    </div>
                </div>
        </section>                           
                
        <section>
            <div className="container">
                <div className="row">
                    <div className="comm col-sm-8 col-lg-6 offset-sm-1 offset-lg-3">
                        <div className="eee mx-auto"><i class="fas fa-angle-double-right"></i><h5 className="rel">Reliable vehecles</h5></div>
                        <div className="ee1">
                            <h5 id="com">Commercial Van Rental, Moving Truck or Van Rental</h5>
                            <h6 id="nee">Need to rent a van or truck and driver?</h6>
                            <h6 id="mo1">Moov Africa Rent A Truck Rental has good options for your truck rental needs in Lagos for use
                                anywhere in Nigeria. Rent vehicles and drivers for personal or business use. Moov Africa Truck
                                Rental is stocked with Box Trucks, Moving Vans, Trucks, Cargo Vans and more.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="foot" style={{backgroundColor:'black',width:'100%'}} variant='dark'>
        <div className="container">
            <div className="row">
                <div className="ter col-sm-12 col-lg-4 col-md-12 offset-sm-0 offset-lg-0 offset-md-0">
                    <h6 id="wht">About</h6>
                    <h6 id="gre">An independent Courier, Haulage n Logistics</h6>
                    <h6 id="gre">Company with amazing services and Packages,</h6>
                    <h6 id="gre">which include Shop2me and Hail a Repair</h6>
                </div>
                <div className="str col-sm-5 col-lg-2 col-md-6 offset-sm-1 offset-lg-0 offset-md-0">
                    <h6 id="wht">Office</h6>
                    <h6 id="gre">48 Oyedele Ogunniyi</h6>
                    <h6 id="gre">Anthony village</h6>
                    <h6 id="gre">Lagos</h6>
                </div>
                <div className="ggg col-sm-5 col-lg-3 col-md-6 offset-sm-0 offset-lg-0 offset-md-0">
                    <h6 id="wht">Get in touch</h6>
                    <h6 id="gre">Mon-fri: 8:00am-6pm/Sat 9am-3pm</h6>
                    <h6 id="gre">+234 (0) 8094820402</h6>
                    <h6 id="gre">enquir@moovafrica.com</h6>
                </div>        
                <div className="soc col-sm-6 col-lg-3 col-md-6 offset-sm-0 offset-lg-0 offset-md-0">
                <h6 id="wht">Social 
                        <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i id="ftl" class="fab fa-facebook-f"></i></a> 
                        <a href="https://twitter.com/moovnigeria"><i class="fab fa-twitter"></i></a>
                            <i className="fab fa-instagram"></i>
                        <a href="https://www.linkedin.com/company/moovafrica/"><i class="fab fa-linkedin-in"></i></a>
                    </h6>
                    <Link to='/register'><button className="bttn" type="submit" style={{ width:"180px", height:"43px", borderRadius:"4px",outline:"none"}}>
                            <h6 className="news" >Sign Up</h6></button></Link>

                </div>
            <div className="row col-lg-10 col-sm-1">
                <h6 id="whtt"><a href=""/>About</h6>
                <h6 id="whtt">Delivery & Returns</h6>
                <h6 id="whtt">Contact</h6>
                <h6 id="whtt">Terms and Condition</h6>
                <h6 id="whtt">Privacy</h6>
                <h6 id="whtt">Cookies</h6>
                <h6 id="whtt">App</h6>
            </div>
            </div>
        </div>
        </section>
        </div>
    )
    }

    export default Rent    