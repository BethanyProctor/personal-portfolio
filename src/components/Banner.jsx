import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import ProfilePicture from '../assets/profile-picture.jpg'

export const Banner = () => {
    return (
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi, I'm Bethany Proctor."}<span>web developer</span></h1>
                    <p>A UCF graduate obsessed with learning new languages of all types. Join me on my coding journey as I create new projects and hone my skills.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                    <img src={ProfilePicture} alt="Profile Picture"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}