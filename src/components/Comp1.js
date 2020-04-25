import React from 'react'
import axios from 'axios'



class Comp1 extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
   }
  

  async handleSubmit(e){
    e.preventDefault();
    await axios({
      method: "POST", 
      url:"http://localhost:5000/send", 
      data:  this.state
    }).then((response)=>{
      console.log(response)
      if (response.status === 200){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name:'', email: '', message: ''})
  }
  
  render() {
	return(
      <div class="form1"> 
        <div class="formx">
        <div class="htp"><h5 id="send">Send a message</h5>
          <h6 id="gig">Fill the form below with the inquiries you may have and we would get back to you as sonn as possible</h6></div>
          <div class="form">  
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
    </div>
        <div className="form-group">
            <label htmlFor="InputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
        </div>
    <button id="sbb" type="submit" className="btn btn-primary">Submit</button>
        </form>
          </div>
          </div>
          <div className="form2">
              <div class="form3">
                  <h5 id="send1">Address</h5>
                  <h6 id="gig">48 Oyedele Ogunniyi Street</h6>
                  <h6 id="gig">Anthony village, Lagos</h6>

                  <h5 id="send2">Email</h5>
                  <h6 id="gig">connect@moov.com.ng</h6>
              </div>
              <div className="form4">
                  <h5 id="send1">Phone</h5>
                  <h6 id="gig">+234 (0) 894820401</h6>
                  <h6 id="gig">+234 (0) 894820402</h6>
                  <div>
                      <h5 id="send2">Connect</h5>
                      <div class="thin">
                      <a href="https://web.facebook.com/moov.nigeria?_rdc=1&_rdr" ><i id="net" className="fab fa-facebook-f"></i></a>
                      <a href="https://twitter.com/moovnigeria"><i id="net" className="fab fa-twitter"></i></a> 
                      <i id="net" className="fab fa-instagram"></i>
                      <a href="https://www.linkedin.com/company/moovafrica/"><i id="net" className="fab fa-linkedin-in"></i></a>  
                      </div>

                  </div>
              </div>
          </div>
      </div>
  
	);
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
  handleSubmit(event) {
  this.setState({status: event.data})
 }
}


export default Comp1


  