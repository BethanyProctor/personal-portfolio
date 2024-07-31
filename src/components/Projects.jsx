import { Col, Container, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/whack-a-mole.png"
import projImg2 from "../assets/devxconnect.png"
import projImg3 from "../assets/raincheck.png"
import projImg4 from "../assets/jate.png"
import projImg5 from "../assets/readme-generator.png"
import projImg6 from "../assets/blog.png"

export const Projects = () => {
    const imgLink1 = 'https://bethanyproctor.github.io/wack-a-mole/'
    const imgLink2 = 'https://dev-x-connect1.onrender.com/'
    const imgLink3 = 'https://bethanyproctor.github.io/raincheck-project/'
    const imgLink4 = 'https://just-another-text-editor-spg8.onrender.com/'
    const imgLink6 = 'https://bethanyproctor.github.io/web-api-blog/'

    const repoLink1 = 'https://github.com/BethanyProctor/wack-a-mole'
    const repoLink2 = 'https://github.com/BethanyProctor/dev-x-connect1'
    const repoLink3 = 'https://github.com/BethanyProctor/raincheck-project'
    const repoLink4 = 'https://github.com/BethanyProctor/just-another-text-editor'
    const repoLink5 = 'https://github.com/BethanyProctor/README-generator'
    const repoLink6 = 'https://github.com/BethanyProctor/web-api-blog'

    const projects = [
        {
            title: "Whack-A-Mole",
            description: "JavaScript and Game Dev",
            imgUrl: projImg1,
            imgLink: imgLink1,
            repoLink: repoLink1
        },
        {
            title: "devXConnect()",
            description: "Full Stack App",
            imgUrl: projImg2,
            imgLink: imgLink2,
            repoLink: repoLink2
        },
        {
            title: "RainCheck",
            description: "UI/UX Design",
            imgUrl: projImg3,
            imgLink: imgLink3,
            repoLink: repoLink3
        },
        {
            title: "J.A.T.E.",
            description: "PWA Development",
            imgUrl: projImg4,
            imgLink: imgLink4,
            repoLink: repoLink4
        },
        {
            title: "README.md Generator",
            description: "Markdown and Node.js",
            imgUrl: projImg5,
            repoLink: repoLink5
        },
        {
            title: "Personal Blog",
            description: "HTML, CSS, JavaScript",
            imgUrl: projImg6,
            imgLink: imgLink6,
            repoLink: repoLink6
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are a few of my projects that I have made in both a MERN stack bootcamp and on my own just for fun.</p>
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