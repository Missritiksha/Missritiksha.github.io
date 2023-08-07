import React, { Component } from 'react'
import anime from 'animejs';

export default class About extends Component {
    componentDidMount(){
        document.title = "About | Ritiksha";
        anime({
            targets: '.fillpage',
            height:["100vh","0vh"],
            duration:500,
            easing: 'linear'
        })
    }
    render() {
        return (
            <div className="about-container">
                <section id="section1" className="about">
                <div id="drops">
                    <div className="drop" data-depth="0.5"></div>
                    <div className="drop" data-depth="0.7"></div>
                    <div className="drop" data-depth="0.9"></div>
                    <div className="drop" data-depth="0.3"></div>
                </div>
                <div className="container position-relative maxHeight">
                    <div className="container-body">
                        <h1 className="name visible-name">About <br /> Me</h1>                        
                    </div>
                </div>
                <div className="scroll-down"><i class="ri-arrow-down-s-line"></i><i class="ri-arrow-down-s-line"></i></div>
            </section>
            <section className="about-desc">
                <div className="container position-relative maxHeight">
                    <div className="d-flex flex-column">
                    <h2 className="position-relative about-title">Who am I?</h2>
                    <div className="maxHeight halfWidth linehight-2 align-self-end">
                        <h3>Ritiksha</h3>
                        <p>A Computer Science and Engineering graduate from Rajasthan Technical University, Kota. <br />
                        I like to built apps in my free time. Joined Freelance community in my 2<sup>nd</sup> Year and worked with two UK based startup.<br />
                        </p>
                    </div>
                    </div>
                    <br /><br />
                    <div className="d-flex flex-column">
                    <h2 className="position-relative about-title">My Domains</h2>
                    <div class="domain d-flex flex-row flex-wrap justify-content-around">
                        <div class="pannel color-1">
                            <div class="pannel-head">
                                <i class="ri-global-fill lg-icon clr-1"></i>
                            </div>
                            <div class="pannel-body">
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div class="pannel color-2">
                            <div class="pannel-head">
                                <i class="ri-computer-line lg-icon clr-2"></i>

                            </div>
                            <div class="pannel-body">
                                <h3>Software Development</h3>
                            </div>
                        </div>
                        <div class="pannel color-3">
                            <div class="pannel-head">
                                <i class="ri-lightbulb-fill lg-icon clr-3"></i>
                            </div>
                            <div class="pannel-body">
                                <h3>Problem Solving</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="clear"></div>
                    <div className="d-flex flex-column">
                    <h2 className="position-relative about-title">My Skills</h2>
                    <div class="domain d-flex flex-row flex-wrap justify-content-around">
                        <div class="icon-pannel animateRight">
                            <img src="/assets/img/icons/python.png" alt="Python" />
                            <div class="caption">Python</div>
                        </div>
                        <div class="icon-pannel animateDown">
                            <img src="/assets/img/icons/javascript.png" alt="JavaScript"/>
                            <div class="caption">JavaScript</div>
                        </div>
                        <div class="icon-pannel animateRight">
                            <img src="/assets/img/icons/c-plus.png" alt="C++ Language"/>
                            <div class="caption">C/C++</div>
                        </div>
                        <div class="icon-pannel animateLeft">
                            <img src="/assets/img/icons/html-css.png" alt="HTML&CSS"/>
                            <div class="caption">HTML & CSS</div>
                        </div>
                        <div class="icon-pannel animateDown">
                            <img src="/assets/img/icons/sass.png" alt="SASS"/>
                            <div class="caption">SASS</div>
                        </div>
                        <div class="icon-pannel animateLeft">
                            <img src="/assets/img/icons/django-icon.png" alt="Django"/>
                            <div class="caption">Django</div>
                        </div>
                        <div class="icon-pannel animateRight">
                            <img src="/assets/img/icons/MERN.png" alt="Node JS"/>
                            <div class="caption">MERN Stack</div>
                        </div>
                        <div class="icon-pannel animateLeft">
                            <img src="/assets/img/icons/php.png" alt="PHP"/>
                            <div class="caption">PHP</div>
                        </div>
                        <div class="icon-pannel animateUp">
                            <img src="/assets/img/icons/MySQL.png" alt="MySQL"/>
                            <div class="caption">MySQL</div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </section>
            </div>
        )
    }
}
