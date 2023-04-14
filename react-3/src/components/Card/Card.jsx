import { useState } from 'react'
import PropTypes from 'prop-types';
import './Card.scss'

const Card = ({ image, name, price, code, description, features, actionFavorite, actionCart }) => {
    const [isOpenFeatures, setIsOpenFeatures] = useState(false)

    const toggleFeatures = () => {
        setIsOpenFeatures(!isOpenFeatures)
    }

    return (

        < div className='card'>
            <img className='card__image' src={image} alt={name} />
            <div className='card__title'>
                <h2>{name}</h2>
                <p><i>SKU: {code}</i></p>
            </div >
            <div className='card__info'>
                <p className='info__description'>{description}</p>
                <ul className='info__features' >
                    <li onClick={toggleFeatures} className='features-name'>Features</li>
                    {isOpenFeatures &&
                        <>{features}</>}</ul>
            </div>
            <div className='card__tobuy'>
                <h3 className='tobuy__price'>USD {price}</h3>
                <div className='tobuy__button'>
                    {actionFavorite}
                    {actionCart}
                </div>
            </div>
        </div >
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    code: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.node,
    actionFavorite: PropTypes.node,
    actionCart: PropTypes.node,
};

Card.defaultProps = {
    features: null,
};

export default Card