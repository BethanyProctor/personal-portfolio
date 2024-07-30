import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, imgLink }) => {
    return (
        <Col sm={6} md={4}>
            <div className="project-img-box">
                <img src={imgUrl} alt="Project screenshot" />
                <div className="project-text-box">
                    <h4><a href={imgLink} target="blank">{title}</a></h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}