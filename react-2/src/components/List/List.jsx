import { Component } from 'react';
import Card from "../Card/Card";
import { getJSON } from '../../halpers/sendRequest';
import { API_URL } from '../../halpers/API';
import PropTypes from 'prop-types';
import './List.scss';


class List extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        getJSON(API_URL)
            .then(data => this.setState({ products: data }))
    }

    render() {
        const { products } = this.state;
        const { addCounterFavorite, addCounterCart } = this.props
        return (
            <div className='list__card'>
                {products.map((product) => (
                    <Card key={product.id}
                        addCounterFavorite={addCounterFavorite}
                        addCounterCart={addCounterCart}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        code={product.code}
                        price={product.price}
                        features={product.features.split(';').map((feature) => (
                            <li>{feature}</li>
                        ))}
                    />
                ))}
            </div>
        )
    }
}
List.propTypes = {
    addCounterFavorite: PropTypes.func.isRequired,
    addCounterCart: PropTypes.func.isRequired,
};

List.defaultProps = {
    addCounterFavorite: () => { },
    addCounterCart: () => { },
};
export default List