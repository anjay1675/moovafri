import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Carousel} from 'react-bootstrap'


   const Menu =()=>{
    return(
        <div>
            <div className="bar">
                <div className="bar1">
                <div className="bar2"><i className="fas fa-phone-alt"></i><h6 className="num">+234 (0) 894820401</h6></div>
                <div className="bar3"><i className="far fa-envelope"></i><Link to='/cont1'><h6 className="enq" >Contact Us</h6></Link></div>
                </div>
            </div>
            <div className="car">
    <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" alt ="Moov" width="180px" height="80px"/>
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

    <Carousel className="ccc">
    <Carousel.Item >
        <div className="row">
            <div className="imgt col-sm-12 col-xs-12">
                <img 
                    className="imgtrux"
                    src="./images/front.jpg"
                    alt="moov africa"
                />
                    {/* <div classname="row">
                    <div className="lll col-lg-8 col-md-6 col-sm-6 col-xs-6 offset-lg-2 offset-md-3 offset-sm-3 text-center">
                        <span className="text1"></span><p></p>
                        <span className="text2">Trusted Cargo handlers</span>
                    </div>
                    </div> */}
            </div>
            </div>
        {/* </div> */}
        {/* </div> */}
    
    
    <Carousel.Caption>
        <div className="container">
        <div className="row">
            <div className="ttt col-sm-10 col-lg-10 offset-sm-1 offset-lg-1 mx-auto">
                <h1 id="tt1">Welcome to Moov Africa</h1>
                <h3 id="tt2">Trusted Cargo handlers</h3>
            </div>
            </div> 
        </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="imgtrux"
      src="./images/package.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className="container">
        <div className="row">
            <div className="tmr col-sm-10 col-lg-10 offset-sm-1 offset-lg-1">
                <button className="but text-center"  type="type" style={{backgroundColor:"black",
                    marginBottom:"60px",color:"white", height:"40px", width:"140px",border:"none", 
                    outline:"none", borderRadius:"5px"}}><a id="reg2" href='https://moovafrica.com/shop2me/'>Shop2me</a>
                </button>

                <div className="qq">
                    <h1 id="one">The most reliable express Delivery</h1>
                    <h1 id="sho">of Parcels and Cargo service providers</h1>
                    <h1 id="me">'Worldwide'</h1>
                </div>
            </div>
        </div>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="imgtrux"
      src="./images/img51.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className="row">
        <div className="ww col-sm-6 col-lg-4 offset-sm-3 offset-lg-1">
            <h4 className="ww1">Express delivery services</h4>
            <h1 className="ww2">Make the Moov . .</h1>
        </div>
        <button className="but"  type="type" style={{backgroundColor:"white",
            marginBottom:"300px",color:"black", height:"40px", width:"140px",border:"none", 
            outline:"none", borderRadius:"5px"}} ><a id="reg3" href='https://moovafrica.com/shop2me/'>Shop2me</a>
        </button>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    
    {/* <div className="on fixed-top"><h1 id="tra1">TRACKING</h1>
    </div> */}
    {/* <div className="track fixed-top"><a href="" 
    id="tra2">Track<i class="fas fa-long-arrow-alt-right"></i></a>
    </div> */}
    </div>

    <section>
    <div className="container">
        <div className="row">
            <div className="nm col-sm-4 offset-sm-4">
                <div className="reg fixed-top">
                    <div className="fa1"><i className="fa fa-angle-up"></i>
                    </div>
                    <div className="fa2"><a href="https://moovafrica.com/delivery/pages/login" id="reg1">Sign Up</a></div>
                </div>
            </div>  
    </div>
    </div>
    </section>

    <section className="eds">
        <div className="container">
    <div className="under">
        <h6 className="our text-center">OUR SERVICES</h6>
        <h2 className="exp">EXPRESS DELIVERY SOLUTIONS</h2>
        <div className="div2">
                  <img id="divi" 
                        src="./images/divider.jpg" 
                        width="100px"
                        height="30px"
                        alt="Moov"
                    />
        </div>
    </div>
    <div className="row mt-5 mb-5">
        <div className="we1 col-sm-12 col-lg-4 col-xl-4 offset-2 mb-5">
        <div className="mo mb-2">More Than Renting A Van</div>
            <div className="text">We provide superior service experience to our Customers 
                through fast express delivery service of parcels and cargo, anywhere in
                Nigeria and Africa when you use Moov Africa
            </div>
        <button type="button" className="butx offset-3 mb-5"><Link id="rent" to='/rent'>Rent a Van</Link></button>       
    </div>
        <div className="truck  col-md-4 col-lg-4 col-xl-4 mb-5 col-xs-4 col-sm-4 col-sm-offset-0 col-lg-4 col-lg-offset-0 text-center">
                <img className="vvv mx-auto"
                    src="./images/moov-project.jpg"
                    alt="Moov Africa"
                    width="380px"
                    height="220px;"
                />
        </div>
    </div>
    </div>
    </section>

    <section className="services">
        <div className="container">
            <div className="row">
                <div className="elx col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="catt">
                        <div className="el1">
                            <img
                                className="el2" 
                                src="./images/imgx2.jpeg"
                                alt="moov africa"
                            />    
                        </div>
                        <div className="giv">Giving You The Best</div><h6 id="pro">We provide superior service experience to our Customers 
                            through fast express delivery service of parcels and cargo, anywhere within
                            Nigeria and Africa when you use Moov Africa</h6><button type="button" className="but1"><h6 id="rent">Offshore</h6></button>
                        </div>
                </div>
            
                <div className="elx col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="catt">
                <div className="el1">        
                    <img
                    className="el2" 
                    src="./images/e-com.jpg"
                    alt="moov africa"
                   
                />
                </div>
                <div className="giv text-center">Quality Services</div><h6 id="pro">Moov Africa also ushers us into the world of E-cooomerce, making life easier.
                 Our online services gets you want you want, and where you want it taken or delivered. Explore and discover.
                </h6><button type="button" className="but1"><Link id="rent" to='/ecom'>E-commerce</Link></button>
                </div>
                </div>
                
                <div className="elx col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="catt">
                <div className="el1">    
                    <img
                    className="el2" 
                    src="./images/crop2.jpg"
                    alt="moov africa"
                />
                
                </div>
                <div className="giv text-center">Guess What?</div><h6 id="pro">Cargo delivery services is what we do best. With our professional drivers
                 and safety measures, you can bet that your desired services are guaranteed. Try it now.</h6>
                 <button type="button" className="but1"><h6 id="rent">Cargo Delivery</h6></button>
                </div>
                </div>
            </div>
            </div>
            </section>
    <section>
        <div className="container">
            <div className="mixx col-sm-6 offset-sm-3">
            <div className="img">
                <img src="./images/e-com7.png" alt="moov africa" className="img2"/>
                <img src="./images/cargo.jpg" alt="moov africa" className="img1"/>
            </div>
            </div>
        </div>
    </section>

    <section className="sat11">
        <div className="container">
            <div className="row">
                <div className="mixx col-lg-6 offset-lg-4 col-sm-8 offset-sm-4">
                    <div className="more">
                        <div className="more1">More</div>
                        <div className="more2">About Us</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="rexx col-lg-3 col-sm-8 offset-sm-4 offset-lg-0">
                <img 
                src="./images/woman.jpg"
                width="240px"
                height="180px"
                alt="moov africa"
                />
                <div className="more3">
                    <div className="more4"><h4 id="topic">Smart Services</h4></div>
                    <div className="more5">We would always beat your imagination, and even more. 
                        Our staff are always very courteous and would always attend to your 
                        needs in due time.We would always beat your imagination, and even more. </div>
                </div>

                </div>
                <div className="rexx col-lg-3 col-sm-6 offset-sm-3 offset-lg-0">
                    <img 
                    src="./images/ship.jpeg"
                    width="240px"
                    height="180px"
                    alt="moov africa"
                    />
                    <div className="more3">
                    <div className="more4"><h4 id="topic">Global Biz</h4></div>
                    <div className="more5">We extend our services, within Africa and beyond, providing speedy and reliable cargo, 
                    courier and frieght services globally. We are your best chance of taking you into the future. </div>
                </div>

                </div>
                <div className="rexx col-lg-3 col-sm-8 offset-sm-4 offset-lg-0">
                    <img 
                    src="./images/hail3.jpeg"
                    width="240px"
                    height="180px"
                    alt="moov africa"
                    />
                    <div className="more3">
                    <div className="more4"><h4 id="topic">Hail A Repair</h4></div>
                    <div className="more5">Do you need your divices and gadgets fixed at very low rates with 100% performace and efficency. 
                    Hail A Repair offers you a platform of getting your toys fixed with delivery services.</div>
                </div>
                </div>
                <div className="rexx col-lg-3 col-sm-8 offset-sm-4 offset-lg-0">
                    <img 
                    src="./images/connect.jpg"
                    width="240px"
                    height="180px"
                    alt="moov africa"
                    />
                    <div className="more3">
                    <div className="more4"><h4 id="topic">Deals</h4></div>
                    <div className="more5">In the fast paced moving world of technology, business and looking for the easy life. We offer open 
                    doors to all business platforms and new discoveries. Let us know what you really want.</div>
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
                        <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i id="ftl" className="fab fa-facebook-f"></i></a> 
                        <a href="https://twitter.com/moovnigeria"><i className="fab fa-twitter"></i></a>
                            <i className="fab fa-instagram"></i>
                        <a href="https://www.linkedin.com/company/moovafrica/"><i className="fab fa-linkedin-in"></i></a>
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
export default Menu
