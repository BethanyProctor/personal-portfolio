import { useState, useEffect } from 'react';

import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import ProfilePicture from '../assets/profile-picture.jpg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Dev", "Web Designer", "Game Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (isDeleting && updatedText === fullText) {
            setIsDeleting(True);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500)
        }
    }

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