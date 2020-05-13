import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


const Ecom=()=>{
    return(
        <div className="bodyy">
             <div className="bar">
                <div className="bar1">
                <div className="bar2"><i class="fas fa-phone-alt"></i><h6 className="num">+234 (0) 894820401</h6></div>
                <div className="bar3"><i class="far fa-envelope"></i><Link to='/cont1'><h6 className="enq" >Contact Us</h6></Link></div>
                </div>
            </div>
        <div className="car">
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
        <div className="ecom"><img src="./images/ecomm2.jpg" alt="moov africa" width="100%" height="650px"/></div>
        <div className="has-max-width text-center"><h1 class="head align-center color-gulfstream ember font-bold">
            "Welcome to the world of E-commerce"</h1>
            </div>
            <section className="sectt" style={{height:"270px", width:"100%"}}>
        <div className="container">
            <div className="row" >
            <div className="shi col-lg-6 offset-lg-1 col-sm-11 offset-sm-1">
            <div className="red"></div>
            <h3 id="our1">Moov Africa <strong>E-commerce</strong> and<em> delivery</em> system</h3>
            <h6 id="our2">Allows e-commerce practitioners access to send, track and manage progress 
            of orders (Pre-paid or Cash-on-Delivery) for delivery in real time.</h6>
            <h6 id="our3">What Moov Africa’s Online account service portal offers.</h6>
            <Link to=""><button className="buttn" type="submit" style={{backgroundColor:"rgb(206, 0, 88)", width:"200px",
            height:"40px",borderRadius:"5px", color:"white",marginTop:"15px"}}>
            <h6 id="tac">Contact Us</h6></button></Link>    
        </div>
        </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row pt-5">
            <div className="pho col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 text-center">          
                <img id="src" src="./images/ecomm1.jpg" alt="Phone" width="580px" height="400px"/>
            </div>
            </div>
        </div>
    </section>   
    
    <section className="pii">
        <div className="container">
            <div className="row">
                <div className="pin col-lg-6 col-sm-10 offset-sm-1">
                    <div className="pho3 ">
                        <div className="pho4">
                            <div className="imag"><div className="img2"><h6 id="ele">Online Shopping</h6></div></div>
                            <div className="imag1"><div className="img2"><h6 id="ele">Warehouse Storage</h6></div></div>
                        </div>
                        <div className="pho5">
                    <div className="imag2"><div className="img2"><h6 id="ele">Delivery</h6></div></div>
                    <div className="imag3"><div className="img2"><h6 id="ele">Our Products</h6></div></div>
                </div>
                    </div>
                    </div>
                    <div className="pho6 col-lg-4 col-sm-10 offset-sm-1">
                        <div className="red"></div>
                        <div><h2>Amazing Combo of offers for E-commerce </h2>
                    <h2>fulfillment:</h2>
                    <h6 id="gad">Free pickup of products for delivery
		 with warehouse storage space for any product (2 months max). we also provide
		free order processing, packing and labelling
		Order confirmation by Customer Service and Delivery Agent prior to delivery.
	    {/* Collection of Cash on Delivery and remittance to you within 24 hours, except weekends
		Two (2) Free retrials of each undelivered shipment (if receiver is unavailable exclude Onforwarding)
		Free return of undelivered items at our scheduled time (return at your instance attract 50% of delivery charge */}
        </h6>
                    <h4 id="sav"><em>Online account</em></h4>
                    <h6 id="gad">Make online request for pickup and have your package taken for delivery.</h6>
                    <h2>E-commerce</h2>
                    <div className="red"></div>
                </div>
            </div>
                </div>
            </div>
    </section>
    <section className="mana">
        <div className="mana1 col-lg-6 col-md-4 offset-md-3 col-sm-11 offset-lg-3 offset-sm-1 text-center">
        <h2>Our Managing patners</h2>
        <h6>For robust and reliable services</h6>
        </div>
    </section>
    <section className="mana2">
        <div className="container">
            <div className="row">
                <div className="mmm col-lg-4 offset-lg-2 col-sm-5 offset-sm-1 text-center">
                    <img src="./images/pat.png" alt="moov africa" width="200px" height="45px"/>
                    
                </div>
                <div className="mmm1 col-lg-4 offset-lg-0 col-sm-4 offset-sm-1 text-center">
                <img src="./images/pat1.jpg" alt="moov africa" width="200px" height="45px"/>
                    
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
export default Ecom