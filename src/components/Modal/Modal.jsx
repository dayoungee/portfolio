import React from 'react';
import PropTypes from "prop-types";

function Modal( props ){

    const{ open, close } = props;
    return(
      <div>
        { open ? (
          <div className="modal-wrapper">
            <div className="modal-wrapper-wrapper">
              {/* eslint-disable-next-line react/button-has-type */}
              <button onClick={close}>
                닫기
              </button>
            </div>
          </div>
          ): null }
      </div>
    );
}

Modal.propTypes = {
    open: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    close: PropTypes.object.isRequired
};

export default Modal;