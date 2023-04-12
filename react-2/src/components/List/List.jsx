import { Component } from 'react';
import Card from "../Card/Card";
// import { getJSON } from '../../halpers/sendRequest';
// import { API_URL } from '../../halpers/API';
import PropTypes from 'prop-types';
import './List.scss';
import Modal from "../Modal/Modal";
import CartButton from '../Card/CartButton/CartButton';
import FavoriteStar from '../Card/FavoriteStar/FavoriteStar';
import Button from '../Button/Button';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // products: [],
            isOpenModal: false,
            selectedProduct: null,
        }
    }


    // componentDidMount() {
    //     getJSON(API_URL)
    //         .then(data => this.setState({ products: data }))
    // }

    toggleModal = () => {
        this.setState({ isOpenModal: !this.state.isOpenModal })
    }

    setSelectedProduct = (product) => {
        this.setState({ selectedProduct: product });
    };

    ToCart = (localname, product) => {

        const localItems = JSON.parse(localStorage.getItem(localname)) || [];
        if (!localItems.some(el => el.code === product.code)) {
            localItems.push(product);
            localStorage.setItem(localname, JSON.stringify(localItems));
        } else {
            const res = localItems.filter(el => el.code !== product.code)
            localStorage.setItem(localname, JSON.stringify(res));
        }
    }

    addToCart = (product) => {
        this.ToCart('cartItems', product)
        this.props.addCounterCart()
    }

    addToFavorite = (product) => {
        this.setSelectedProduct(product)
        this.ToCart('FavoriteItems', product)
        this.props.addCounterFavorite()
    }
    inFavorite = (product) => {
        return this.props.InFavorite.some(el => el.code === product.code)
    }
    inCart = (product) => {
        return this.props.InCart.some(el => el.code === product.code)
    }


    render() {
        const { isOpenModal, selectedProduct } = this.state;
        const { products } = this.props
        return (
            <div className='list__card'>
                {products.map((product) => (
                    <Card key={product.id}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        code={product.code}
                        price={product.price}
                        features={product.features.split(';').map((feature) => (
                            <li>{feature}</li>
                        ))
                        }
                        actFav={< FavoriteStar
                            addFavorite={() => {
                                this.addToFavorite(product)
                            }}
                            id={product.code}
                            InFavorite={this.inFavorite(product)} />}
                        actCart={< CartButton
                            toggle={() => {
                                this.setSelectedProduct(product)
                                this.toggleModal()
                            }}
                            id={product.code}
                            InCart={this.inCart(product)} />}
                    />)
                )}
                {isOpenModal && <Modal
                    className='modal'
                    header={
                        this.inCart(selectedProduct) ?
                            'Product has been removed from the cart!' :
                            'Product has been added to the cart!'
                    }
                    closeButton={true}
                    text={`${selectedProduct.name} \n  price :  USD ${selectedProduct.price}`}
                    actionClose={this.toggleModal}
                    actions={<><Button text="Ok"
                        backgroundColor='#f8b803'
                        onClick={() => {
                            this.addToCart(selectedProduct)
                            this.toggleModal()
                        }
                        } />
                        <Button text="Cancel"
                            backgroundColor='black'
                            onClick={this.toggleModal} /></>}

                />}
            </div >
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