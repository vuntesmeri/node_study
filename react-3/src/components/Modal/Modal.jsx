import PropTypes from "prop-types";
import Button from "../Button/Button";
import './Modal.scss'
import { ReactComponent as CloseIcon } from "../Button/Close.svg"


const Modal = ({ className, header, closeButton, text, actionClose, actions }) => {
    const handleOuterClick = (event) => {
        if (event.target === event.currentTarget) {
            actionClose();
        }
    };
    return (
        <div className="outer" onClick={handleOuterClick}>
            <div className={className}>
                <h2>{header}
                    {closeButton &&
                        (<span><Button className='small' onClick={actionClose} text={<CloseIcon />} /></span>)}</h2>
                <p>{text}</p>
                {actions && <div className="modal__buttons">{actions}</div>}
            </div>
        </div>
    )
}


Modal.propTypes = {
    className: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actionClose: PropTypes.func.isRequired,
    actions: PropTypes.node,
    closeButton: PropTypes.bool.isRequired
}
Modal.defaultProps = {
    closeButton: true
};

export default Modal
