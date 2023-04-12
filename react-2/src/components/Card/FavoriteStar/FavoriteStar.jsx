import { Component } from 'react'
import { ReactComponent as StarIcon } from '../FavoriteStar/FavoriteStar.svg'

import './FavoriteStar.scss'
import PropTypes from 'prop-types'

class FavoriteStar extends Component {
    render() {
        const { addFavorite, id, InFavorite } = this.props
        return (
            <div className='star'
                id={id}
                onClick={() => {
                    addFavorite()
                }} >
                {InFavorite ? <StarIcon fill="#f8b803" /> : <StarIcon fill="grey" />}
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