import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="project-img-box">
                <img src={imgUrl} alt="Project screenshot" />
                <div className="project-text-box">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}