import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HTML from '../assets/skill-icons/html.svg'
import CSS from '../assets/skill-icons/css.svg'
import REACT from '../assets/skill-icons/react.svg'
import JS from '../assets/skill-icons/js.svg'
import NODE from '../assets/skill-icons/node.svg'
import BOOTSTRAP from '../assets/skill-icons/bootstrap.svg'
import CV from '../assets/cv/cv.pdf'
import { CloudDownload } from "react-bootstrap-icons"

export const Skills = () => {
     const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };
    return (
        <section className="skill" id="skills">
           <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p className='skill-par-1'>Having been exposed to both front-end and back-end skills, my strengths lie in designing and creating applications that bring the user joy and ease to interact with. Although I haven't been coding for long, I am confident in my skills shown below. If you would like to learn more about my qualifications, take a look at my CV.</p>
                    <button className='cv-btn'><a download="" href={CV} className='cvLink'>Download CV <CloudDownload /></a></button>

                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={HTML} alt="logo" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={CSS} alt="logo" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={JS} alt="logo" />
                            <h5>JAVASCRIPT</h5>
                        </div>
                        <div className="item">
                            <img src={BOOTSTRAP} alt="logo" />
                            <h5>BOOTSTRAP</h5>
                        </div>
                        <div className="item">
                            <img src={REACT} alt="logo" />
                            <h5>REACT</h5>
                        </div>
                        <div className="item">
                            <img src={NODE} alt="logo" />
                            <h5>NODE.JS</h5>
                        </div>
                        
                    </Carousel>
                </div>
                </Col>
            </Row>
           </Container>
        </section>
    )
}