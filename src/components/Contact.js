import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Navbar, Nav,} from 'react-bootstrap'


class Contact extends React.Component{
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject:'',
        message: ''
      }
     }
     onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
      onSubjectChange(event){
        this.setState({subject: event.target.value})
      }

      handleSubmit(e){
        e.preventDefault();
        console.log(this.state);

      axios({
        method: "POST", 
        url:"http://localhost:5000/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
     
    resetForm(){
       this.setState({name: '', email: '', message: ''})   
    }
           
    render() {        
      return(
        <div className="bodyy">
            <div className="bar">
                <div className="bar1">
                <div className="bar2"><i class="fas fa-phone-alt"></i><h6 className="num">+234 (0) 894820401</h6></div>
                <div className="bar3"><i class="far fa-envelope"></i><Link to='/cont'><h6 className="enq" >Contact Us</h6></Link></div>
            </div>
        </div>
        <div className="car">
    <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
                <img className="logo" src="./images/w1.png" width="180px" alt="moov"height="80px"/>
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
      <div className="call">
          <div className="call1">
          <h5 id="any">HAVE A QUESTION ?</h5>
          <h1 id="uss">CONTACT US NOW</h1>
          </div>         
    </div>
    <section className="contact-section spad">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 offset-xl-2">
					<div className="section-title">
						<h2>Contact Me</h2>
					</div>
          </div>
					<form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
						<div class="row">
							<div className="col-sm-8 offset-sm-2 col-md-4 offset-md-2">
								<input type="text" placeholder="Name" id="name" value={this.state.name} onChange={(name)=>this.onNameChange(name)}/>
							</div>
							<div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
								<input type="text" placeholder="E-mail" id="email" value={this.state.email} onChange={(email)=>this.onEmailChange(email)}/>
							</div>
							<div class="col-sm-8 offset-sm-2 col-md-8 offset-md-2">
								<input type="text" placeholder="Subject"id="subject" value={this.state.subject} onChange={(subject)=>this.onSubjectChange(subject)}/>
								<textarea placeholder="Message" id="message" value={this.state.message} onChange={(message)=>this.onMessageChange(message)}></textarea>
							</div>
						</div>
						<div className="col-sm-2 offset-sm-8 col-md-2 offset-md-8 text-md-right">
            <button className="bttn" type="submit" style={{ width:"180px", height:"43px", borderRadius:"4px",outline:"none",backgroundColor:"black",color:"white"}}>
                <h6 className="news" >Send message</h6></button>
            </div>
					</form>
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
            );
        }          
    }
      export default Contact