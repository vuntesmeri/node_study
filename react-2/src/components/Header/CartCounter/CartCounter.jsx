import { Component } from 'react'
import PropTypes from 'prop-types';

class CartCounter extends Component {
    render() {
        const { changeCart } = this.props

        return (
            <div className='my__count'>{changeCart}</div>
        )
    }
}
CartCounter.propTypes = {
    changeCart: PropTypes.number.isRequired,
}

CartCounter.defaultProps = {
    changeCart: 0,
}
export default CartCounter
