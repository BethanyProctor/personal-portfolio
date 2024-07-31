import { useState, useEffect } from 'react';

import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import ProfilePicture from '../assets/profile-pic-2.jpg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Full Stack Developer", "Web Designer", "Game Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /1.5)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
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
                    <h1>{"Hi, I'm Bethany Proctor, "}<span>{text}</span></h1>
                    <p>As a UCF graduate obsessed with learning new languages of all types, my journey has brought me to studying the MERN stack. Join me as I continue to learn coding, create new projects, and hone my skills.</p>
                    <button><a href='#connect'>Let's Connect <ArrowRightCircle /></a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={ProfilePicture} alt="Profile Picture" className='banner-img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}