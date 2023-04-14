import PropTypes from 'prop-types';

const CartCounter = ({ changeCart }) => {
    return (
        <div className='my__count'>{changeCart}</div>
    )
}


CartCounter.propTypes = {
    changeCart: PropTypes.number.isRequired,
}

CartCounter.defaultProps = {
    changeCart: 0,
}
export default CartCounter
