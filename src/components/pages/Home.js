import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

import Services from '../common/Services';
import Portfolio from '../common/Portfolio';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='This is a title'
          subtitle='This is the subtitle'
          buttonText='Tell me more'
          link='/services'
          showButton={true}
          image={image}
        />

        <Services />
        <Portfolio />
      </div>
    );
  }
}

export default Home;
