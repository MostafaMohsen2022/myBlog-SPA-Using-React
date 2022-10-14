

import React, {Component} from "react";
import './App.css'
import { FaBeer } from 'react-icons/fa';
import { FaDharmachakra } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa'
import { FaRecycle } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

class Services extends Component {
  render(){
    return(
        <section className="we-offer-area text-center bg-gray">
            <div className="container">
                <div className="row" id="services">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2>Our <span>Services</span></h2>
                            <h4>Lorem Ipsum is simply text</h4>
                        </div>
                    </div>
                </div>
                    <div className="row our-offer-items less-carousel">
                        <div className="col-md-4 col-sm-6 equal-height">
                            <div className="item">
                               <i><FaBeer className="i" /></i>
                                
                                <h4>Project creation</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 equal-height">
                            <div className="item">
                                <i><FaDharmachakra className="i"/></i>
                                
                                <h4>Software Development</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
        
                        <div className="col-md-4 col-sm-6 equal-height">
                            <div className="item">
                                <i><FaTasks/></i>
                                <h4>Porject Management</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
    
                        <div className="col-md-4 col-sm-6 equal-height">
                            <div className="item">
                                <i className="fas fa-tachometer-alt"><FaTachometerAlt/></i>
                                <h4>Porject Impliment</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 equal-height">
                            <div className="item">
                                <i className="fas fa-recycle"><FaRecycle/></i>
                                <h4>Software Update</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
    
                        <div className="col-md-4 col-sm-6 equal-height">
                            <div className="item">
                                <i className="fas fa-headset"><FaHeadset/></i>
                                <h4>24/7 Support</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </p>
                            </div>
                        </div>
                    
                    </div>
            </div>
        </section>
    )
  }
}

export default Services;