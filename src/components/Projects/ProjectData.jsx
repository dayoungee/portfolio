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
        // eslint-disable-next-line no-lone-blocks
            {/* eslint-disable-next-line react/no-danger */}
            return <div className="project-data" dangerouslySetInnerHTML={{ __html: projectData.node.html }} />
        }}
  />
);

ProjectData.propTypes = {
    // eslint-disable-next-line react/require-default-props
    projectId: PropTypes.string
};

export default ProjectData;