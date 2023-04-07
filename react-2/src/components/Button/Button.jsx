import { Component } from "react";
import PropTypes from 'prop-types';
import './Button.scss';


class Button extends Component {
    render() {
        const { className, backgroundColor, onClick, text } = this.props;
        return (
            <button className={className}
                type="button"
                style={{ backgroundColor }}
                onClick={onClick}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default Button;