import { Component } from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import PropTypes from 'prop-types'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countFavorite: 0,
      countCart: 0
    }
  }
  componentDidMount() {
    const favoriteCount = JSON.parse(localStorage.getItem('FavoriteItems')) || []
    this.setState({ countFavorite: favoriteCount.length })

    const cartCount = JSON.parse(localStorage.getItem('cartItems')) || []
    this.setState({ countCart: cartCount.length })
  }


  addCounterFavorite = () => {
    const favoriteCount = JSON.parse(localStorage.getItem('FavoriteItems')) || []
    this.setState({ countFavorite: favoriteCount.length })
  }
  addCounterCart = () => {
    const cartCount = JSON.parse(localStorage.getItem('cartItems')) || []
    this.setState({ countCart: cartCount.length })
  }

  render() {
    return (<>
      <Header changeFavorite={this.state.countFavorite} changeCart={this.state.countCart} />
      <List addCounterFavorite={this.addCounterFavorite} addCounterCart={this.addCounterCart} /></>
    );
  }
}
Header.propTypes = {
  changeFavorite: PropTypes.number.isRequired,
  changeCart: PropTypes.number.isRequired,
}

export default App;
