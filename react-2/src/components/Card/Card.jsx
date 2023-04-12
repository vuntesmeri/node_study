import { Component } from 'react'
import PropTypes from 'prop-types';
import './Card.scss'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenFeatures: false,
        }
    }
    toggleFeatures = () => { this.setState({ isOpenFeatures: !this.state.isOpenFeatures }) }

    render() {
        const { id, image, name, price, code, description, features, actFav, actCart } = this.props
        return (
            <div className='card' id={id}>
                <img className='card__image' src={image} alt={name} />
                <div className='card__title'>
                    <h2>{name}</h2>
                    <p><i>SKU: {code}</i></p>
                </div >
                <div className='card__info'>
                    <p className='info__description'>{description}</p>
                    <ul className='info__features' >
                        <li onClick={this.toggleFeatures} className='features-name'>Features</li>
                        {this.state.isOpenFeatures &&
                            <>{features}</>}</ul>
                </div>
                <div className='card__tobuy'>
                    <h3 className='tobuy__price'>USD {price}</h3>
                    <div className='tobuy__button'>
                        {actFav}
                        {actCart}
                    </div>
                </div>
            </div>
        )
    }
}
Card.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    code: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.node,
    actions: PropTypes.node,
};

Card.defaultProps = {
    features: null,
};

export default Card