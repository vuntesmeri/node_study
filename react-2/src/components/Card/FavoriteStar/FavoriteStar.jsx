import { Component } from 'react'
import './FavoriteStar.scss'
import PropTypes from 'prop-types'

class FavoriteStar extends Component {
    render() {
        const { addFavorite, id, clicked } = this.props
        return (
            <div className='star'
                id={id}
                onClick={addFavorite}
            >
                {clicked ? '★' : '☆'}
            </div>
        )
    }
}
FavoriteStar.propTypes = {
    addFavorite: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    clicked: PropTypes.bool.isRequired
};

FavoriteStar.defaultProps = {
    clicked: false
};
export default FavoriteStar