import { Component } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import CartButton from './CartButton/CartButton';
import FavoriteStar from './FavoriteStar/FavoriteStar';
import './Card.scss'

class Card extends Component {
    constructor(props) {
        super(props)
        const localFavorite = JSON.parse(localStorage.getItem('FavoriteItems')) || []
        const favorite = localFavorite.some(el => el.code === this.props.code)

        const localCart = JSON.parse(localStorage.getItem('cartItems')) || []
        const cart = localCart.some(el => el.code === this.props.code)

        this.state = {
            isOpenFeatures: false,
            InCart: cart,
            InFavorite: favorite,
            isOpenModal: false,
        }
    }
    toggleFeatures = () => { this.setState({ isOpenFeatures: !this.state.isOpenFeatures }) }

    toggleModal = () => { this.setState({ isOpenModal: !this.state.isOpenModal }) }

    ToCart = (localname) => {
        const localItems = JSON.parse(localStorage.getItem(localname)) || [];
        const { code, name, price } = this.props;
        const item = { code, name, price };
        if (!localItems.some(el => el.code === item.code)) {
            localItems.push(item);
            localStorage.setItem(localname, JSON.stringify(localItems));
        } else {
            const res = localItems.filter(el => el.code !== item.code)
            localStorage.setItem(localname, JSON.stringify(res));
        }
    }
    addToCart = () => {
        const { addCounterCart } = this.props
        this.ToCart('cartItems')
        this.setState({ InCart: !this.state.InCart })
        addCounterCart()
    }
    addToFavorite = () => {
        const { addCounterFavorite } = this.props
        this.ToCart('FavoriteItems')
        this.setState({ InFavorite: !this.state.InFavorite })
        addCounterFavorite()
    }

    render() {
        const { id, image, name, price, code, description, features } = this.props
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
                        <FavoriteStar addFavorite={this.addToFavorite} id={code} clicked={this.state.InFavorite} />
                        <CartButton addCart={this.addToCart} toggle={this.toggleModal} incart={this.state.InCart} />
                    </div>

                </div>
                {this.state.isOpenModal && this.state.InCart && <Modal
                    className='modal'
                    header='Product has been added to the cart!'
                    closeButton={true}
                    text={`${name} \n  price :  USD ${price}`}
                    actionClose={
                        this.toggleModal}
                    actions={<img src={image} alt='name' />}
                />}
                {this.state.isOpenModal && !this.state.InCart && <Modal
                    className='modal'
                    header='Product has been removed from the cart!'
                    closeButton={true}
                    text={`${name} \n  price :  USD ${price}`}
                    actionClose={
                        this.toggleModal}
                />}
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
    addCounterCart: PropTypes.func.isRequired,
    addCounterFavorite: PropTypes.func.isRequired
};

Card.defaultProps = {
    features: null,
};

export default Card