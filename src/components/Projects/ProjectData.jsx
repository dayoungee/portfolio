import {graphql, StaticQuery} from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const ProjectData = ({ projectId }) => (
  <StaticQuery
    query={graphql`
  query {
    files: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          html
          excerpt
        }
      }
    }
  }
    `}
    render={(data) => {
            const projectData = data.files.edges.find((n) => n.node.frontmatter.title.includes(projectId));
            if (!projectData) return null;
            return <div className="project-data" dangerouslySetInnerHTML={{ __html: projectData.node.html }} />
        }}
  />
);

ProjectData.propTypes = {
    projectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default ProjectData;
