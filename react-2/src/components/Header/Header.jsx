import { Component } from 'react'
import FavoriteCounter from './FavoriteCounter/FavoriteCounter'
import CartCounter from './CartCounter/CartCounter'
import { ReactComponent as FavoriteIcon } from './FavoriteCounter/FavoriteCounter.svg'
import { ReactComponent as CartIcon } from './CartCounter/CartCounter.svg'
import PropTypes from 'prop-types';
import './Header.scss'

class Header extends Component {

    render() {
        const { changeFavorite, changeCart } = this.props
        return (<>

            <header className='name'>
                <h1>Welcome to Our Musical Instruments Store!</h1>
                <div className='header'>
                    <div className='header__place'>
                        <FavoriteIcon />
                        <FavoriteCounter changeFavorite={changeFavorite} />
                    </div>
                    <div className='header__place'>
                        <CartIcon />
                        <CartCounter changeCart={changeCart} />
                    </div>
                </div>
            </header></>
        )
    }
}
Header.propTypes = {
    changeFavorite: PropTypes.number.isRequired,
    changeCart: PropTypes.number.isRequired,
}

Header.defaultProps = {
    changeFavorite: 0,
    changeCart: 0,
}
export default Header