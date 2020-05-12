import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Cargo=()=>{
    return(
    <div>
        <div class="caa">
        <div className="bar">
        <div className="bar1">
        <div className="bar2"><i class="fas fa-phone-alt"></i><h6 class="num">+234 (0) 894820401</h6></div>
        <div className="bar3"><i class="far fa-envelope"></i><Link to='/cont1'><h6 className="enq" >Contact Us</h6></Link></div>
        </div>
        </div>
    <div className="car">
    <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" width="180px" height="80px"/>
            <Nav className="mr-auto">    
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/cargo'>Cargo Delivery</Link>
                <Link className="nav-link" to='/rent'>Rent a Van</Link>
                <a className="nav-link" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                <Link className="nav-link" to='/deals'>Deals</Link>
                <Link className="nav-link" to='/hail1'>Hail a Repair</Link>
                <a className="nav-link" href='https://moovafrica.com/news/'>Logistics News</a>
                <a className="nav-link" href='https://moovafrica.com/delivery/pages/login'>Login/Sign Up</a>
            </Nav>  
        </Navbar.Collapse>
    </Navbar>
    <div className="row">
        <div classname="imgtt col-sm-12 col-xs-12 col-lg-12 offset-lg-0">
            <img className="imgtru" 
                 src="./images/cargo1.jpg"
                 alt="moov"
                 width="1300px"
                 height="650px"
            />       
        </div>
        </div>
    </div>
    <div className="container">
        <div className="nic">
            <div className="nic1">
                <img id="truc" 
                     src="./images/truck26.jpg"
                     width="240px"
                     alt="moov"
                />
                <h4 id="mat">Same Day! Next Day! When?</h4>
                <h2 id="tak">Taking you forward</h2>
                <h5 id="tak2">We guarantee your important parcels and cargo get the desired Express Service</h5>
                    <div className="bick1">
                        <img 
                            id="truc2"
                            src="./images/truck25.jpg"
                            alt="truck"
                        />
                        <h4 id="mat">Dispatch Services</h4>
                        <h2 id="tak">Just in few munites</h2>
                        <h5 id="tak2">All around Lagos</h5>
                    </div>
            </div>
            <div className="nic2">
                <div className="nic3">
                <i class="fas fa-truck-moving"></i>
                </div>
                <div className="nic4">
                    <h4 id="whaa">What do you want delivered</h4>
                    <h5>Different Categories</h5>
                    <h6 id="whaa1">Small/Medium Cargo</h6>
                    <h6 id="whaa1">Small/Big Parcels</h6>
                    <h6 id="whaa1">Bulk Cargo</h6>
                    <h6 id="whaa1">Haulage</h6>
                    <h6 id="whaa1">Home/Office Paking removal</h6>
                </div>    
                <div className="nic5">
                <div className="nic6"><i class="fas fa-luggage-cart"></i></div>
                <div className="nic7">
                    <h4 className="what1">Packing and Removal</h4>
                    <h5>What are your options</h5>
                    <h6 id="whaa1">We render various services</h6>
                    <h6 id="whaa1">Right to your door step</h6>
                    <h6 id="whaa1">From 1kg to 10,000tn</h6>
                    <h6 id="whaa1">Carefiully handled</h6>
                    <h6 id="whaa1">Very secured</h6>                
                    </div>
                </div>
                <div className="nicx5">
                <div className="nicx6"><i class="fas fa-box-open"></i></div>
                <div className="nicx7">
                    <h4 className="what1">We carry out various services</h4>
                    <h5> Our Solutions</h5>
                    <h6 id="whaa1">Limitless nationwide</h6> 
                    <h6 id="whaa1">Time-definite delivery</h6>
                    <h6 id="whaa1">Tracking Capabilities for Every Shipment - 24/7/365</h6>
                    <h6 id="whaa1">Electronic POD (Proof Of Delivery)</h6>
                    <h6 id="whaa1">Electronic Billing and Invoicing</h6>
                    </div>
                </div>    
            </div>    
            </div>
        </div> 
            <section className="animx">
                <div className="fin col-sm-8 offset-sm-2 col-lg-12 offset-lg-0">
                    <img src="./images/img6.jpg" alt="Moov Africa" width="100%" height="auto"/>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="packk col-lg-4 col-sm-10 col-md-6 offset-lg-0 offset-sm-1 offset-md-3 text-center">
                            <img className="pack1"  src="./images/packa1.png" alt="Moov Africa" width="280px" height="240px"/>
                        </div>
                        <div className="packk col-lg-4 col-sm-10 col-md-6 offset-lg-0 offset-sm-1 offset-md-3 text-center">
                            <img className="pack2" src="./images/packa2.jpg" alt="Moov Africa" width="280px" height="190px"/>
                        </div>
                        <div className="packk col-lg-4 col-sm-10 col-md-6 offset-lg-0 offset-sm-1 offset-md-3 text-center">
                            <img className="pack3" src="./images/packa3.jpg" alt="Moov Africa" width="300px" height="220px"/>
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
            

    </div>       
            
    )
}
export default Cargo