import React, {useEffect, useState, useContext} from 'react';
import PropTypes from "prop-types";
import showdown from "showdown";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {Button} from "@mui/material";
import PortfolioContext from "../../context/context";
import ProjectData from "../Projects/ProjectData";


function Modal( props ){

    const { project } = useContext(PortfolioContext);
    const { projectFont } = useContext(PortfolioContext);

    const [projectFontInfo, setProjectFont] = useState("");
    /* const [projectData, setProjectData] = useState("");
    const [projectInfo, setProjectInfo] = useState(""); */
    const{ open, close, id } = props;

    useEffect(()=>{
        if(project[id-1]=== undefined) {
            /* setProjectData("");
            setProjectInfo(""); */
            setProjectFont("");
        }
        else{
            /* setProjectData(project[id-1].data);
            setProjectInfo(project[id-1].info); */
            setProjectFont(projectFont.font);
        }
    },[id]);

    const converter = new showdown.Converter();
    const htmlFont = converter.makeHtml(projectFontInfo);
    return(
      <div>
        { open ? (
          <div className="modal-wrapper">
            <div className="modal-wrapper-wrapper">
              <Button startIcon={<IoIosCloseCircleOutline />} id="modal-exit" onClick={close} />
              <ProjectData projectId={id || 0} />
              {/* eslint-disable-next-line react/no-danger */}
              <span dangerouslySetInnerHTML={{ __html: htmlFont }} />
            </div>
          </div>
          ): null }
      </div>
    );
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    close: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};

export default Modal;
