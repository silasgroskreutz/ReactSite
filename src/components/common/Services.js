import React, { Component } from 'react';
import SingleService from './SingleService';

const services = [
  {
    title: 'E-Commerce',
    dsecription: 'Shop Shop Shop',
    icon: 'fa-shopping-cart'
  },
  {
    title: 'Responsive Design',
    dsecription: 'Yep, I respond',
    icon: 'fa-laptop'
  },
  { title: 'Web Security', dsecription: 'Super secret', icon: 'fa-lock' }
];

class Services extends Component {
  render() {
    return (
      <section id='services'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Services</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row text-center'></div>
          {services.map((service, index) => {
            return <SingleService {...service} key={index} />;
          })}
        </div>
      </section>
    );
  }
}

export default Services;
