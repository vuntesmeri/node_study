import FavoriteCounter from './FavoriteCounter/FavoriteCounter'
import CartCounter from './CartCounter/CartCounter'
import { ReactComponent as FavoriteIcon } from './FavoriteCounter/FavoriteCounter.svg'
import { ReactComponent as CartIcon } from './CartCounter/CartCounter.svg'
import PropTypes from 'prop-types';
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = ({ changeFavorite, changeCart }) => {
    return (<>
        <header className='name'>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><h1>Welcome to Our Musical Instruments Store!</h1></Link>
            <div className='header'>
                <Link to="/favorite" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='header__place' >
                        <FavoriteIcon />
                        <FavoriteCounter changeFavorite={changeFavorite} />
                    </div></Link>
                <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='header__place'>
                        <CartIcon />
                        <CartCounter changeCart={changeCart} />
                    </div></Link>
            </div>
        </header>
    </>
    )
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