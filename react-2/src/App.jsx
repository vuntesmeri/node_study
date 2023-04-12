import { Component } from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import { getJSON } from './halpers/sendRequest';
import { API_URL } from './halpers/API';
import PropTypes from 'prop-types'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      countFavorite: 0,
      countCart: 0,
      favoriteCount: JSON.parse(localStorage.getItem('FavoriteItems')) || [],
      cartCount: JSON.parse(localStorage.getItem('cartItems')) || []
    }
  }
  componentDidMount() {
    getJSON(API_URL)
      .then(data => this.setState({ products: data }))
    // this.setState({ favoriteCount: })
    // this.setState({ arrFavorite: Object.assign(this.state.arrFavorite, favoriteCount) })
    this.setState({ countFavorite: this.state.favoriteCount.length })

    // this.setState(cartCount : )
    // this.setState({ arrCart: Object.assign(this.state.arrCart, cartCount) })
    this.setState({ countCart: this.state.cartCount.length })
  }

  addCounterFavorite = () => {
    const favoriteCounter = JSON.parse(localStorage.getItem('FavoriteItems')) || []
    this.setState({ favoriteCount: favoriteCounter })
    this.setState({ countFavorite: favoriteCounter.length })
  }

  addCounterCart = () => {
    const cartCounter = JSON.parse(localStorage.getItem('cartItems')) || []
    this.setState({ cartCount: cartCounter })
    this.setState({ countCart: cartCounter.length })
  }

  render() {

    return (<>
      <Header changeFavorite={this.state.countFavorite} changeCart={this.state.countCart} />
      <List products={this.state.products} InFavorite={this.state.favoriteCount} InCart={this.state.cartCount} addCounterFavorite={this.addCounterFavorite} addCounterCart={this.addCounterCart} /></>
    );
  }
}
Header.propTypes = {
  changeFavorite: PropTypes.number.isRequired,
  changeCart: PropTypes.number.isRequired,
}

export default App;
