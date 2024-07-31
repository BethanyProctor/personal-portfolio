import { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import envelope from "../assets/envelope.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        })
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully."})
        } else if (!response) {
            setStatus({ success: false, message: "Oops, something went wrong."})
            alert("Please fill out all input fields.")
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={envelope} alt="animated envelope" />
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me Today</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" required value={formDetails.firstName} placeholder="First Name" onChange={((e) => onFormUpdate('firstName', e.target.value))} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={((e) => onFormUpdate('lastName', e.target.value))} />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={((e) => onFormUpdate('email', e.target.value))} />
                                </Col>
                                <Col className="px-1">
                                    <textarea rows='6' value={formDetails.message} placeholder="Message" onChange={((e) => onFormUpdate('message', e.target.value))} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}