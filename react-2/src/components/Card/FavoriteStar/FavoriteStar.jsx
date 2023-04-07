import { Component } from 'react'
import { ReactComponent as StarIconBefore } from '../FavoriteStar/FavoriteStarBefore.svg'
import { ReactComponent as StarIconAfter } from '../FavoriteStar/FavoriteStarAfter.svg'
import './FavoriteStar.scss'
import PropTypes from 'prop-types'

class FavoriteStar extends Component {
    render() {
        const { addFavorite, id, clicked, backgroundColor } = this.props
        return (
            <div className='star'
                id={id}
                onClick={addFavorite}>
                {clicked ? <StarIconBefore /> : <StarIconAfter />}
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