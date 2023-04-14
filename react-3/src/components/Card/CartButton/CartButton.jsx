import Button from '../../Button/Button'
import PropTypes from 'prop-types'

const CartButton = ({ addCart, product, InCart }) => {

    return (
        < Button className='button'
            text={InCart ? "In Cart" : "Add to Cart"}
            backgroundColor='black'
            onClick={() => {
                addCart(product)
            }
            }
        />
    )
}

CartButton.propTypes = {
    toggle: PropTypes.func.isRequired,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
}


CartButton.defaultProps = {
    text: 'Add to Cart',
    backgroundColor: 'black',
}
export default CartButton