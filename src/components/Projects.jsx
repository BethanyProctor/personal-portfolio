import { Col, Container, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/whack-a-mole.png"
import projImg2 from "../assets/devxconnect.png"
import projImg3 from "../assets/raincheck.png"
import projImg4 from "../assets/jate.png"
import projImg5 from "../assets/readme-generator.png"
import projImg6 from "../assets/blog.png"

export const Projects = () => {

    const projects = [
        {
            title: "Whack-A-Mole",
            description: "JavaScript and Game Dev",
            imgUrl: projImg1
        },
        {
            title: "devXConnect()",
            description: "Full Stack App",
            imgUrl: projImg2
        },
        {
            title: "RainCheck",
            description: "UI/UX Design",
            imgUrl: projImg3
        },
        {
            title: "J.A.T.E.",
            description: "PWA Development",
            imgUrl: projImg4
        },
        {
            title: "README.md Generator",
            description: "Markdown and Node.js",
            imgUrl: projImg5
        },
        {
            title: "Personal Blog",
            description: "HTML, CSS, JavaScript",
            imgUrl: projImg6
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are a few of my projects that I have made in both a MERN stack bootcamp and on my own.</p>
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index} 
                                    {...project} />
                                )
                            })
                        }
                    </Row>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}