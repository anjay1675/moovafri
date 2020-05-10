import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'



const Deals =()=>{
    return(
        <div>
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

    <section>
        <div className="d-block w-100">
            <div className="container">
                <div className="row">
                <div className="deal2 col-sm-10 offset-sm-1 col-lg-6 offset-lg-1">
                    <h4 className="wha">What we offer</h4>
                    <h3 className="wha1">Exceptional Services</h3>
                    <h6 className="whaa">We would always beat your imagination, and even more. 
                        We partner with you to give you exactly what you need, now and always.</h6>
                </div>
                </div>
            </div>            
        </div> 
    </section> 
    
    
<section>  
    <div className="pur">
        <div className="pur1">
            <div className="pur2 col"><i class="far fa-handshake"></i></div>
            <div className="pur3">
                <h6 id="for">Opportunities</h6>
                <h2>We set out varieties of business platforms</h2>
                <div className="var">
                    <div className="var1"><h2>just to suit your need</h2></div>
                    <div className="var2"><i id="class"class="fas fa-long-arrow-alt-right"></i></div>
                </div> 
                <h6 id="for">For better explanation, you could always reach out to Larry. 
                    Meetings could be set up to give you your custom services</h6>  
            </div>
        </div>
    </div>
</section>  

<section>
    <div className="red col-md-3 offset-md-3"></div>
        <div className="red1"><h3>In your <strong id="qe">Quest</strong> to find the <em>easy</em> life</h3></div>
            <div className="red1"><h6>We offer our patners the choice to make the right business Moov. Moov Africa is 
            the best </h6></div>
            <h6 className="red1">platform to always count on.</h6>
        <div className="redd col-md-4 offset-md-4"><img src="./images/deals6.jpg" alt="deals" width="400px" height="400px"/></div>
    <div className="red col-md-3 offset-md-3"></div>
</section>

<section className="ma">
    <div className="container">
        <div className="row">
                <div class="mag col-sm-12 col-lg-4 offset-sm-0 offset-lg-0"><img id ="mag1"src="./images/mmm.jpg" alt="moov africa" width="300px" height="300px"/></div>
                    <div className="mag2 col-sm-12 col-lg-5 offset-sm-0 offset-lg-0">
                        <h2 id="le">Learn more about what we do. Get in touch with us at Moov Africa.</h2>
                        <h6 id="le1">We market and sell your products with us and you</h6>
                        <h6 id="le2">and you get real time business deals</h6>
                    </div>
                    <div className="white col-sm-6 col-lg-3 offset-sm-3 offset-lg-0">
                        <div className="white1"></div> 
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
export default Deals