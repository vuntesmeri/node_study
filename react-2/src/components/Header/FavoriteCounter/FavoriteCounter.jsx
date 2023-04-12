import { Component } from 'react'
import PropTypes from 'prop-types';

class FavoriteCounter extends Component {
    render() {
        const { changeFavorite } = this.props
        return (
            <div className='my__count'>{changeFavorite}</div>
        )
    }
}
FavoriteCounter.propTypes = {
    changeFavorite: PropTypes.number.isRequired
}

FavoriteCounter.defaultProps = {
    changeFavorite: 0
}
export default FavoriteCounter
