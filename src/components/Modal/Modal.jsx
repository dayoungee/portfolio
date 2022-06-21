import React, {useEffect, useState, useContext} from 'react';
import PropTypes from "prop-types";
import showdown from "showdown";
import Slider from "../Slider/Slider"
import PortfolioContext from "../../context/context";


function Modal( props ){

    const { project } = useContext(PortfolioContext);
    const [projectData, setProjectData] = useState("");
    const{ open, close, id } = props;

    useEffect(()=>{
        if(project[id-1]=== undefined) {
            setProjectData("");
        }
        else{
            setProjectData(project[id-1].data);
        }
    },[id]);

    const converter = new showdown.Converter();
    const html = converter.makeHtml(projectData);
    return(
      <div>
        { open ? (
          <div className="modal-wrapper">
            <div className="modal-wrapper-wrapper">
              {/* eslint-disable-next-line react/button-has-type */}
              <button onClick={close}>
                닫기
              </button>
              <Slider id={id} />
              <div dangerouslySetInnerHTML={{ __html: html }} />
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