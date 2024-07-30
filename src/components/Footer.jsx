import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/logo.png"
import icon1 from "../assets/github-icon.svg"
import icon2 from "../assets/linkedin.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" className="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end" >
                        <div className="social-icon">
                            <a href="https://github.com/BethanyProctor" target="blank"> <img src={icon1} alt="GitHubg logo" className='icon' /></a>
                            <a href="https://www.linkedin.com/" target="blank"> <img src={icon2} alt="LinkedIn logo" className='icon icon-right' /></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved by Bethany Proctor.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}