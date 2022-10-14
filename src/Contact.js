


import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';



class Contact extends Component {
  render(){
    return(
         <Container>
            <div className="card shadow-sm border-0 px-3 rounded-2 mb-3  p-5 py-4 mx-auto mt-5 bg-light" >
                <p className="text-center" id="contact"><h1 >keep touch</h1></p>
                    <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>{this.props.title}</h3></div>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                        <label className="mb-0">Your name<span className="text-danger">*</span></label>
                        <input name="name" type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                        <label className="mb-0">Your email<span className="text-danger">*</span></label>
                        <input name="email" type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                        <label className="mb-0">Your contact number (Optional)</label>
                        <input name="contact" type="text" className="form-control" placeholder="Contact"   />
                        </div>
                        <div className="form-group">
                        <label className="mb-0">Message<span className="text-danger">*</span></label>
                        <textarea name="message" type="text" className="form-control" placeholder="Message" />
                        </div>
                        <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Send" /></p>
                    </form>
                    
                    </div>
                </div>
             </Container>
    )
  }
}

export default Contact;