import { ReactComponent as StarIcon } from '../FavoriteStar/FavoriteStar.svg'
import './FavoriteStar.scss'
import PropTypes from 'prop-types'

const FavoriteStar = ({ addFavorite, InFavorite, product }) => {
    return (
        <div className='star'
            onClick={() => {
                addFavorite(product)
            }} >
            {InFavorite ? <StarIcon fill="#f8b803" /> : <StarIcon fill="grey" />}
        </div>
    )
}

FavoriteStar.propTypes = {
    addFavorite: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    inFavorite: PropTypes.bool.isRequired
};

FavoriteStar.defaultProps = {
    inFavorite: false,
    product: {}
};
export default FavoriteStar