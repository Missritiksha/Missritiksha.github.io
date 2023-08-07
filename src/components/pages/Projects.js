import React, { Component } from 'react'
import anime from 'animejs';
export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
        }
        this.interval = null
    }
    componentDidMount() {
        document.title = "Projects | Ritiksha Jeriya";
        anime({
            targets: '.fillpage',
            height: ["100vh", "0vh"],
            duration: 500,
            easing: 'linear'
        })
        $('.venobox').venobox({
            framewidth: 'auto',
            frameheight: 'auto',
            'share': false
        });
        this.interval = setInterval(this.bubble, 500);
        //   if(innerWidth > 650){
        //   var x1 = new RandomObjectMover(document.getElementById('project1'), document.getElementById('water'), 0, 0);
        //   x1.start()
        //   var x2 = new RandomObjectMover(document.getElementById('project2'), document.getElementById('water'), 400, 800);
        //   x2.start()
        //   var x3 = new RandomObjectMover(document.getElementById('project3'), document.getElementById('water'), 1000, 1200);
        //   x3.start()
        //   var x4 = new RandomObjectMover(document.getElementById('project4'), document.getElementById('water'), 0, 0);
        //   x4.start()
        //   var x5 = new RandomObjectMover(document.getElementById('project5'), document.getElementById('water'), 400, 800);
        //   x5.start()
        //   var x6 = new RandomObjectMover(document.getElementById('project6'), document.getElementById('water'), 1000, 1200);
        //   x6.start()
        //   var x7 = new RandomObjectMover(document.getElementById('project7'), document.getElementById('water'), 0, 0);
        //   x7.start()
        //   var x8 = new RandomObjectMover(document.getElementById('project8'), document.getElementById('water'), 400, 800);
        //   x8.start()
        // }
        //   else{
        //     //   document.getElementById('project1').style.left = 10 + '%'
        //     //   document.getElementById('project2').style.left = 50 + '%'
        //     //   document.getElementById('project3').style.left = (innerWidth - 100) + 'px'
        //   }
    }
    bubble = () => {
        const section = document.getElementById('water')
        const creatElement = document.createElement('b')
        var size = Math.random() * 40
        creatElement.style.width = size + 'px'
        creatElement.style.height = size + 'px'
        creatElement.style.left = Math.random() * innerWidth + 'px'
        section.appendChild(creatElement)

        setTimeout(() => {
            creatElement.remove()
        }, 4000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="content">
                <section id="section2" className="section projects">
                    <div className="sun"><div className="sun-inner"></div></div>
                    <div className="wall"></div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#cdf0ff" />
                        </g>
                    </svg>
                    <div className="water" id="water">
                        {/* <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#practica"><div className="project-bubble sea-shell" id="project1"> <div className="project-text">Practica</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#oddsKiller"><div className="project-bubble star-fish" id="project2"> <div className="project-text">OddsKiller</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#emailScheduler"><div className="project-bubble octopus" id="project3"> <div className="project-text">Email Scheduler</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#takshashila"><div className="project-bubble sea-shell" id="project4"> <div className="project-text">Takshashila</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#practica"><div className="project-bubble star-fish" id="project5"> <div className="project-text">Sorting Vizualizer</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#practica"><div className="project-bubble octopus" id="project6"> <div className="project-text">Blog System</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#faceDetection"><div className="project-bubble sea-shell" id="project7"> <div className="project-text">Face Detection Attendance</div></div></a>
                        <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#practica"><div className="project-bubble star-fish" id="project8"> <div className="project-text">Web scraper</div></div></a> */}
                        <section class="portfolio-details">
                            <div class="container" data-aos="fade-up">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#practica">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/practica.gif" alt="Practica preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>Practica</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web Development</li>
                                            <li><strong>Tech Stack</strong>: Django, React, Ajax, Twillio-API</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        <hr />
                        <section class="portfolio-details">
                            <div class="container">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#oddsKiller">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/OddsKiller.gif" alt="OddsKiller preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>OddsKiller</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web Development</li>
                                            <li><strong>Tech Stack</strong>: Django, JavaScript, Ajax, Webscrapping</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        <hr />
                        <section class="portfolio-details">
                            <div class="container">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#emailScheduler">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/email_scheduler.jpg" alt="Email Scheduler preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>Email Scheduler</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web Development</li>
                                            <li><strong>Tech Stack</strong>: MERN Stack</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        <hr />
                        <section class="portfolio-details">
                            <div class="container">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#webScraper">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/webScraper.jpg" alt="webScraper preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>Web Scraper</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Software Development</li>
                                            <li><strong>Tech Stack</strong>: Python, BeautifulSoup</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        <hr />
                        <section class="portfolio-details">
                            <div class="container">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#sorting">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/sorting.gif" alt="Sorting Algorithm vizualizer preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>Sorting Algorithm Vizualizer</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web Development</li>
                                            <li><strong>Tech Stack</strong>: HTML/CSS, JavaScript</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        <hr />
                        <section class="portfolio-details">
                            <div class="container">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#takshashila">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/takshashila.gif" alt="takshashila preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>Takshashila</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web Development</li>
                                            <li><strong>Tech Stack</strong>: Django, JavaScript</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        
                        <hr />
                        <section class="portfolio-details">
                            <div class="container">

                                <div class="portfolio-details-container">

                                    <div class="portfolio-details-carousel">
                                    <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#blog">
                                        <div className="position-relative maxContent-width"><img src="/assets/img/blog.gif" alt="Blog preview" class="img-fluid" />
                                    <div className="img-sub"><p>Click to Expand</p></div></div></a>
                                    </div>

                                    <div class="portfolio-info">
                                        <h3>Blog App with Intern Management</h3>
                                        <ul>
                                            <li><strong>Category</strong>: Web Development</li>
                                            <li><strong>Tech Stack</strong>: PHP, JavaScript, MySQL</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* <div class="portfolio-description">
                                    <h2>Email Scheduler</h2>
                                    <p>
                                        It was built during a 2 day Hackathon. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.
                                    </p>
                                </div> */}

                            </div>
                        </section>
                        
                    </div>
                    <div className="sea-bed" id="seaBed">
                        <div className="grass seaWeeds"></div>
                        <div className="grass2 seaWeeds"></div>
                        <div className="grass seaWeeds"></div>
                        <div className="grass2 seaWeeds"></div>
                        <div className="grass seaWeeds"></div>
                        <div className="grass2 seaWeeds"></div>
                    </div>
                    {/* <div className="my-4 d-flex flex-wrap flex-row justify-content-between position-relative slide-project carousel-container">
                            <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#oddsKiller">
                                <div className="project-Slide oddsKiller"></div>
                            </a>
                            <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#takshashila">
                                <div className="project-Slide takshashila"></div>
                            </a>
                            <a className="venobox maxWidth mb-4" data-vbtype="inline" href="#faceDetection">
                                <div className="project-Slide faceDetection"></div>
                            </a>
                        </div> */}
                    <div id="emailScheduler" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/email_scheduler.jpg" alt="Email Scheduler preview" />
                            <div className="card-body">
                                <h5 className="card-title">Email Scheduler</h5>
                                <p className="card-text">It was built during a 2 day Hackathon with MERN stack. Schedule daily/ weekly/ monthly/ yearly recurring mails. Implemented Google O-auth for login.</p>
                            </div>
                        </div>
                    </div>
                    <div id="practica" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/practica.gif" alt="FaceDetection Preview" />
                            <div className="card-body">
                                <h5 className="card-title">Practica</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>Built a Full Stack learning app with Django and React.</li>
                                        <li>Designed complete database according to client’s instructions.</li>
                                        <li>Developed an admin panel to handle transactions and mentors.</li>
                                        <li>Developed a custom React calendar to schedule bookings.</li>
                                        <li>Implemented video calling using Twilio API with PayPal’s payments gateway.</li>
                                        <li>Tested and Deployed on AWS ec2 instance.</li>
                                        <li>Key Features :
                                            <ul>
                                                <li>User authentication,</li>
                                                <li>CRUD user operations,</li>
                                                <li>Slots and Bookings handling,</li>
                                                <li>Mentor-Mentee video session,</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="oddsKiller" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/OddsKiller.gif" alt="OddsKiller Preview" />
                            <div className="card-body">
                                <h5 className="card-title">OddsKiller</h5>
                                <p className="card-text">An sports betting web app created for client. User can buy subscription and then view data scrapped and use those data to place bets to maximize their profit.
                                    <h6>Goals =></h6>
                                    <ol>
                                        <li>To convert web scrapping script into Django view</li>
                                        <li>Creating and managing Subscriber (Paypal Api)</li>
                                        <li>Creating User Interface</li>
                                        <li>Hosting and deploying App.</li>
                                    </ol></p>
                            </div>
                        </div>
                    </div>
                    <div id="takshashila" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/takshashila.gif" alt="Takshashila preview" />
                            <div className="card-body">
                                <h5 className="card-title">Takshashila</h5>
                                <p className="card-text">This project aims to put together different technology used in online education to build one standalone platform which includes
                                    Face Recognition Attendance, Live Classes, Class-Subject based Learning Environment facilitating Video lectures, notes or ppt
                                    provides by teacher being kept organized and stored for reusability, along with enabling teachers to assign assignments to students.</p>
                            </div>
                        </div>
                    </div>
                    <div id="sorting" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/sorting.gif" alt="Sorting Algorithm Vizualizer Preview" />
                            <div className="card-body">
                                <h5 className="card-title">Sorting Algorithm Vizualiser</h5>
                                <p className="card-text">A web app to show how different Sorting Algorithms perform sort.<br />Algorithms included : Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, Merge Sort.<br />Also includes option to control speed of sorting for better vizualisation.</p>
                            </div>
                        </div>
                    </div>
                    <div id="webScraper" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/webScraper.jpg" alt="webScraper Preview" />
                            <div className="card-body">
                                <h5 className="card-title">Web Scraper</h5>
                                <p className="card-text">A Web Scraper Built in Python with help of BeautifulSoup library.<br /> This Web Scraper is built to extract data of architectures from multi-page home decoration and design based websites and make an excel sheet out of extracted data.</p>
                            </div>
                        </div>
                    </div>
                    <div id="blog" className="none">
                        <div className="container">
                        </div>
                        <div className="card mb-3">
                            <img className="card-img-top" src="/assets/img/blog.gif" alt="Blog Preview" />
                            <div className="card-body">
                                <h5 className="card-title">Blog App with Intern Management</h5>
                                <p className="card-text">This website is bulit with help of HTML CSS JS and PHP for backend using MySQL database. <br />
                                Its basic functionality is to hold and manage different interns as well as different posts created by them.<br />Given total access to admin via dashboard with proper Authentication.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
