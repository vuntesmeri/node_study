import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ className, backgroundColor, onClick, text }) => {
    return (
        <button className={className}
            type="button"
            style={{ backgroundColor }}
            onClick={onClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default Button;