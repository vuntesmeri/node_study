import PropTypes from 'prop-types';

const FavoriteCounter = ({ changeFavorite }) => {
    return (
        <div className='my__count'>{changeFavorite}</div>
    )
}

FavoriteCounter.propTypes = {
    changeFavorite: PropTypes.number.isRequired
}

FavoriteCounter.defaultProps = {
    changeFavorite: 0
}
export default FavoriteCounter
