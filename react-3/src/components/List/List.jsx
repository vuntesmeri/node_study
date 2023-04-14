import Card from "../Card/Card";
import PropTypes from 'prop-types';
import './List.scss';
import CartButton from '../Card/CartButton/CartButton';
import FavoriteStar from '../Card/FavoriteStar/FavoriteStar';

const List = ({ products, addFavorite, addCart, className, InCart, InFavorite }) => {
    const structure = () => {
        const newarr = products.reduce((arr, { type }) => {
            return arr.add(type)
        }, new Set())
        return newarr
    }

    const types = [...structure()]
    return (
        <div className={className}>
            {types.map((el) => (
                <div key={el} className='types'>
                    <h2 className="types__name">{el}</h2>
                    <div className='types__card'>
                        {products.filter((ell) => ell.type === el).map((product) => (
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
                                actionFavorite={< FavoriteStar
                                    addFavorite={addFavorite}
                                    product={product}
                                    InFavorite={InFavorite(product)}
                                />}
                                actionCart={< CartButton
                                    addCart={addCart}
                                    product={product}
                                    InCart={InCart(product)}
                                />}
                            />)
                        )}</div>
                </div>))
            }
        </div >
    )
}

List.propTypes = {
    products: PropTypes.array,
    addFavorite: PropTypes.func.isRequired,
    addCart: PropTypes.func.isRequired,
    InFavorite: PropTypes.bool.isRequired,
    InCart: PropTypes.bool.isRequired
};

List.defaultProps = {
    products: [],
    addFavorite: () => { },
    addCart: () => { },
    InFavorite: false,
    InCart: false
};
export default List