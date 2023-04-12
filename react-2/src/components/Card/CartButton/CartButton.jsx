import { Component } from 'react'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

class CartButton extends Component {
    render() {
        const { toggle, id, InCart } = this.props
        return (
            < Button className='button'
                id={id}
                text={InCart ? "In Cart" : "Add to Cart"}
                backgroundColor='black'
                onClick={() => {
                    toggle()
                }
                }
            />
        )
    }
}
CartButton.propTypes = {
    addCart: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
}

CartButton.defaultProps = {
    text: 'Add to Cart',
    backgroundColor: 'black',
}
export default CartButton