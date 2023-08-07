import React, { Component } from 'react';
import {Link, withRouter} from'react-router-dom';

class PageWrapper extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    toggle =()=>{
        document.querySelector(".headerToggle").classList.toggle("cross");
        document.getElementById("header").classList.toggle("headerOpen");
        $(".content").toggleClass("shrink");
    }
    render() {
        return (
            <div>
                <div class="mouse-block"><div class="mouse"></div></div>
                <header id="header">
                <div className="headerToggle" onClick={this.toggle}>
                    <span className="line bar1"></span>
                    <span className="line bar2"></span>
                    <span className="line bar3"></span>
                </div>
                <div className="header-body d-flex align-items-center justify-content-center flex-column">
                    {/* <div className="dp">
                        <img src="/assets/img/dp.jpg" alt="Display Picture" />
                    </div> */}
                    <h3 className="mt-3">Ritiksha</h3>
                    <span class="designation mb-3">
                        <a href="#">C.S.E. student</a> at Engineering College Jhalawar
                    </span>
                    <div className="d-flex flex-row flex-wrap justify-content-around">
                    <a href="https://twitter.com/Ritiksh50313151" className="p-3" target="_blank"><i class="ri-twitter-fill"></i></a>
                        <a href="https://instagram.com/ritikshaa_24_?igshid=MzRlODBiNWFlZA==" className="p-3" target="_blank"><i class="ri-instagram-line"></i></a>
                        <a href="https://github.com/Missritiksha" className="p-3" target="_blank"><i class="ri-github-fill"></i></a>
                        <a href="https://www.linkedin.com/in/ritiksha-411390213" className="p-3" target="_blank"><i class="ri-linkedin-fill"></i></a>
                    </div>

                    <ul className="navigation">
                        <li><Link to="/" className="active">Home</Link></li><br />
                        <li><Link to="/about">About</Link></li><br />
                        <li><Link to="/projects">Projects</Link></li><br />
                        {/* <li><a href="/#contact">Contact</a></li> */}
                    </ul>

                </div>
                </header>
                {/*  <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><Link to="/">Practica</Link></h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li class="drop-down"><a onClick={this.dropdownClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg> &nbsp; {this.props.data != null&&<>{this.props.data.username}</>}
                        </a>
                        <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        </ul>
                        </li>
                        </ul>
                    </nav>


                    </div>
                </header> */}
                {this.props.children}
            </div>

        )
    }
}

export default withRouter(PageWrapper)
