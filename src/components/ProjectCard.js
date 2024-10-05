import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
      <p><a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            View on GitHub
          </a></p> 
        </div>
      </div>
    </Col>
  );
}
