import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import './Modal.scss'


class Modal extends Component {
    render() {
        const { className, header, closeButton, text, actions, onClick, buttonText1, buttonText2, color1, color2 } = this.props;
        return (
            <div className="outer" onClick={onClick}>
                <div className={className}>
                    <h2>{header}
                        {closeButton &&
                            (<span><Button onClick={actions} text={'X'} /></span>)}</h2>
                    <p>{text}</p>
                    <div>
                        <Button className='modal__buttons' text={buttonText1} onClick={actions} backgroundColor={color1} />
                        <Button className='modal__buttons' text={buttonText2} onClick={actions} backgroundColor={color2} />
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
    actions: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    buttonText1: PropTypes.string,
    buttonText2: PropTypes.string,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired
}


export default Modal