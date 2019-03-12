import React, {Component} from 'react';
import Header from '../common/Header';
import SearchPopup from '../common/SearchPopup';
import Home from './Home';

class HomeContainer extends Component {
  state={
    isPopupActive: false
  };

  setIsPopupActive = isPopupActive => this.setState({isPopupActive});

  showPopup = () => this.setIsPopupActive(true)

  hidePopup = () => this.setIsPopupActive(false)

  render() {
    const {isPopupActive} = this.state;
    return (
      <div className="home-container">
        <Header showPopup={this.showPopup}/>
        <SearchPopup isPopupActive={isPopupActive} hidePopup={this.hidePopup} />
        <Home />
      </div>
    );
  }
}
export default HomeContainer;
