import React, { Component } from 'react';
import { createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';


const modalRoot=document.querySelector('#modal-root');
 class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
          this.props.onClose();
        }
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
          this.props.onClose();
        }
      };

    render() {
        return createPortal(
            <div  onClick={this.handleOverlayClick} className={s.overlay}>
                <div className={s.modal}>{this.props.children}</div>
            </div>,
            modalRoot,
        )
    }
   
}

Modal.propTypes = {
    children: PropTypes.element,
};

export default Modal;