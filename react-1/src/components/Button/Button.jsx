import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Button.scss';


class Button extends Component {
    render() {
        const { className, backgroundColor, onClick, text } = this.props;
        return (<div>
            <button className={className}
                type="button"
                style={{ backgroundColor }}
                onClick={onClick}>
                {text}
            </button>
        </div>
        )
    }
}
Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}
export default Button;