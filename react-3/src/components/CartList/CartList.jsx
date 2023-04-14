import Card from "../Card/Card"
import CartButton from "../Card/CartButton/CartButton"
import PropTypes from 'prop-types';

const CartList = ({ cartCount, addCart, InCart }) => {
    return (
        <div className="page">
            {cartCount.map((product) => (
                <Card key={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    code={product.code}
                    price={product.price}
                    features={product.features.split(';').map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))
                    }
                    actionCart={< CartButton
                        addCart={addCart}
                        product={product}
                        InCart={InCart(product)}
                    />}
                />))}
        </div>)

}

CartList.propTypes = {
    cartCount: PropTypes.array,
    addCart: PropTypes.func.isRequired,
    InCart: PropTypes.bool.isRequired
};

CartList.defaultProps = {
    cartCount: [],
    addCart: () => { },
    InCart: false
};

export default CartList