import { Component } from 'react'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

class CartButton extends Component {
    render() {
        const { addCart, toggle, incart } = this.props
        return (
            < Button className='button'
                text={incart ? "In Cart" : "Add to Cart"}
                backgroundColor='black'
                onClick={() => {
                    toggle()
                    addCart()
                }
                }
            />
        )
    }
}
CartButton.propTypes = {
    addCart: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    incart: PropTypes.bool.isRequired,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
}

CartButton.defaultProps = {
    text: 'Add to Cart',
    backgroundColor: 'black',
}
export default CartButton