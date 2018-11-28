import React, { PureComponent } from 'react';

import './_modal.scss';

class Modal extends PureComponent {

    render(){
        const { width, height, children } = this.props;
        return(
            <div className="modal">
            <div style={{ width: width }} className="modal-content">

            <div className="modal-title-bar">
                <div className="modal-title-text">
                    <div className="modal-title">
                    </div>
                </div>
                <div className="child">
                </div>
            </div>

            <div style={{height:height}} className="modal-body">
            {children}
            </div>

            </div>
            </div>
        );
    }
}

export default Modal;