import Card from "../Card/Card"
import FavoriteStar from "../Card/FavoriteStar/FavoriteStar"
import PropTypes from 'prop-types';

const WhishList = ({ favoriteCount, addFavorite, InFavorite }) => {
    return (
        <div className="page">
            {favoriteCount.map((product) => (
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
                    actionFavorite={<FavoriteStar
                        addFavorite={addFavorite}
                        product={product}
                        InFavorite={InFavorite(product)} />} />
            ))
            }
        </div>)

}
WhishList.propTypes = {
    favoriteCount: PropTypes.array,
    addFavorite: PropTypes.func.isRequired,
    InFavorite: PropTypes.bool.isRequired,
};

WhishList.defaultProps = {
    favoriteCount: [],
    addFavorite: () => { },
    InFavorite: false,
};
export default WhishList