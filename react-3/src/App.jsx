import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { getJSON } from './helpers/sendRequest';
import { API_URL } from './helpers/API'
import Header from './components/Header/Header';
import List from './components/List/List';
import WhishList from './components/WhishList/WhishList'
import CartList from './components/CartList/CartList';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
// import PropTypes from 'prop-types'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [favoriteCount, setFavoriteCount] = useState(JSON.parse(localStorage.getItem('FavoriteItems')) || [])
  const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    getJSON(API_URL)
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  const addCounterFavorite = () => {
    const favoriteCounter = JSON.parse(localStorage.getItem('FavoriteItems')) || [];
    setFavoriteCount(favoriteCounter);
  }
  const addCounterCart = () => {
    const cartCounter = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartCounter);
  }

  const toCart = (localname, product) => {
    const localItems = JSON.parse(localStorage.getItem(localname)) || [];
    if (!localItems.some(el => el.code === product.code)) {
      localItems.push(product);
      localStorage.setItem(localname, JSON.stringify(localItems));
    } else {
      const res = localItems.filter(el => el.code !== product.code)
      localStorage.setItem(localname, JSON.stringify(res));
    }
  }

  const addToCart = (product) => {
    toCart('cartItems', product)
    addCounterCart()
  }

  const addToFavorite = (product) => {
    toCart('FavoriteItems', product)
    addCounterFavorite()
  }
  const inFavorite = (product) => {
    return favoriteCount.some(el => el.code === product.code)
  }
  const inCart = (product) => {
    return cartCount.some(el => el.code === product.code)
  }

  return (<>
    <Header changeFavorite={favoriteCount.length} changeCart={cartCount.length} />
    <Routes>
      <Route path={"/"} element={
        <List
          addFavorite={(product) => {
            addToFavorite(product)
          }}
          InFavorite={(product) => inFavorite(product)}
          favoriteCount={favoriteCount}
          addCart={(product) => {
            setSelectedProduct(product)
            toggleModal()
          }}
          InCart={(product) => inCart(product)}
          cartCount={cartCount}
          products={products}
        />} />

      <Route path={"/favorite"} element={<><h1 className="page__name">My WhishList</h1>
        <WhishList
          addFavorite={(product) => { addToFavorite(product) }}
          favoriteCount={favoriteCount}
          InFavorite={(product) => inFavorite(product)}
          addCounterFavorite={addCounterFavorite} /></>} />

      <Route path={"/cart"} element={<><h1 className="page__name">My Cart</h1>
        <CartList
          addCart={(product) => {
            setSelectedProduct(product)
            toggleModal()
          }}
          cartCount={cartCount}
          InCart={(product) => inCart(product)}
          addCounterCart={addCounterCart} /></>} />
    </Routes>
    {isOpenModal && <Modal
      className='modal'
      header={inCart(selectedProduct) ?
        'Product has been removed from the cart!' :
        'Product has been added to the cart!'
      }
      closeButton={true}
      text={`${selectedProduct.name} \n  price :  USD ${selectedProduct.price}`}
      actionClose={toggleModal}
      actions={<><Button
        text="Ok"
        backgroundColor='#f8b803'
        onClick={() => {
          addToCart(selectedProduct)
          toggleModal()
        }
        } />
        <Button text="Cancel"
          backgroundColor='black'
          onClick={toggleModal} /></>}
    />
    }
  </>
  );
}
export default App;



