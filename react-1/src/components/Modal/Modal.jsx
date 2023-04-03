import { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import './Modal.scss'


class Modal extends Component {
    handleOuterClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.actionClose();
        }
    };
    render() {
        const { className, header, closeButton, text, actionClose, actions } = this.props;
        return (
            <div className="outer" onClick={this.handleOuterClick}>
                <div className={className}>
                    <h2>{header}
                        {closeButton &&
                            (<span><Button onClick={actionClose} text={'X'} /></span>)}</h2>
                    <p>{text}</p>
                    {actions && <div className="modal__buttons">{actions}</div>}
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
    actionClose: PropTypes.func,
    handleClick: PropTypes.func,
    actions: PropTypes.node,
    closeButton: PropTypes.bool
}


export default Modal