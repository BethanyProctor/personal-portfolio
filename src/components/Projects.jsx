
export const Projects = () => {

    const projects = [
        {
            title: "Whack-A-Mole",
            description: "JavaScript and Game Dev",
            imgUrl: ''
        },
        {
            title: "devXConnect()",
            description: "Full Stack App",
            imgUrl: 'src\assets\devxconnect.png'
        },
        {
            title: "RainCheck",
            description: "UI/UX Design",
            imgUrl: 'src\assets\raincheck.png'
        },
        {
            title: "J.A.T.E.",
            description: "PWA Development",
            imgUrl: 'src\assets\jate.png'
        },
        {
            title: "README.md Generator",
            description: "Markdown and Node.js",
            imgUrl: 'src\assets\readme-generator.png'
        },
        {
            title: "Personal Blog",
            description: "HTML, CSS, JavaScript",
            imgUrl: 'src\assets\blog.png'
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
                                    <p>{project.title}</p>
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