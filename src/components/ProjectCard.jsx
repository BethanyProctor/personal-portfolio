import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, imgLink, repoLink }) => {
    return (
        <Col sm={6} md={4}>
            <div className="project-img-box">
                <img src={imgUrl} alt="Project screenshot" />
                <div className="project-text-box">
                    <h4><a href={imgLink} target="blank" className="appLink">{title}</a></h4>
                    <span>{description}</span>
                    <br></br>
                    <button className="repo-btn"><a href={repoLink} target="blank" className="repoLink">Visit Repo</a></button>
                </div>
            </div>
        </Col>
    )
}