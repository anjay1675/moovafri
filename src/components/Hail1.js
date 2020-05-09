import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


   const Hail1 =()=>{
    return(
        <div>
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
    <section className="sect" style={{backgroundColor:"rgba(230, 221, 208, 0.5)", paddingBottom:"50px"}}>
    <div className="container" >
        <div className="row">
        
             <div className="hai1 col-lg-4 col-md-4 col-sm-6 offset-sm-3 offset-lg-0 offset-md-0">
                <div className="cre2  mx-auto">
                    <h5 id="gadx">Gadgets</h5>
                    <h5 id="wee">We handle repairs of all sort of electronics and house whole equipment.</h5>
                    <h6 id="gad2"> The possibility is endless..</h6>
                </div>
                </div>
            
            <div className="hai1 col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-lg-0 offset-md-0 ">
                <div className="cre3 mx-auto">
                    <h5 id="gadx">Machines</h5>
                    <h5 id="wee">Sometimes people wonder where you get some of your heavy duty, medium and light 
                        machines fixed. I guess you got the solution</h5>
                    <h6 id="gad2">At Moov Africa we profer that solution</h6>
                </div>
                </div>
            
            
            <div className="hai col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-lg-0 offset-md-0">
            <div className="cre4 ">
                <div className="red"></div>
                <h2>Excellence through </h2>
                <h2>quality</h2>
                <h6 id="gad">Moov Africa helps you get your daily gadgets fixed at affordable prices. 
                    We have experienced repair outlets with the guarantee of giving you the best services</h6>
            
                <div className="red"></div>
            </div>
            </div>
        </div>
    </div>
    </section>

    <section className="sectt" style={{height:"270px", width:"100%"}}>
        <div className="container">
            <div className="row" >
            <div className="shi col-lg-6 offset-lg-1 col-sm-11 offset-sm-1">
            <div className="red"></div>
            <h3 id="our1">Our <strong>Assurance</strong> to <em>device</em> owners</h3>
            <h6 id="our2">Moov Africa partners with professional engineers and specialist in the divers fields, 
            to yeild high quality services on your repairs.</h6>
            <h6 id="our3">Get in touch and feel the difference.</h6>
            <Link to=""><button className="buttn" type="submit" style={{backgroundColor:"rgb(206, 0, 88)", width:"200px",
            height:"40px",borderRadius:"5px", color:"white",marginTop:"15px"}}>
            <h6 id="tac">Contact Us</h6></button></Link>    
        </div>
        </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
            <div className="pho col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 text-center">          
                <img id="src" src="./images/repair5.jpeg" alt="Phone" width="580px" height="400px"/>
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
                            <div className="imagx"><div className="img2"><h6 id="ele">Electronics</h6></div></div>
                            <div className="imag1x"><div className="img2"><h6 id="ele">Machines</h6></div></div>
                        </div>
                        <div className="pho5">
                    <div className="imag2x"><div className="img2"><h6 id="ele">Phones</h6></div></div>
                    <div className="imag3x"><div className="img2"><h6 id="ele">Gadgets</h6></div></div>
                </div>
                    </div>
                    </div>
                    <div className="pho6 col-lg-4 col-sm-10 offset-sm-1">
                        <div className="red"></div>
                        <div><h2>Pick Fix and</h2>
                    <h2>Return</h2>
                    <h6 id="gad">Have your damaged devices taken out for urgent professional 
                    repair and returned to you. Faulty device, no time to waste in trafic. We'll pick, repair 
                    and return to you. Repair done by verified experienced technicians.</h6>
                    <h4 id="sav"><em>Save cost</em></h4>
                    <h6 id="gad">Get a temporary replacement while you wait.</h6>
                    <h2>Hail a Repair</h2>
                    <div className="red"></div>
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
        )}
      export default Hail1