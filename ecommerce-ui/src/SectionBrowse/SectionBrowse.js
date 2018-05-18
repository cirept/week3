import React,{Component} from 'react';

import Card from '../Card/Card.js';

export default class Places extends Component {

    render() {
      console.log(this.props.addToCart);
      // console.log(addToCart);
      const airbnbs = this.props.airbnbs;
      const places = airbnbs.map((place, index) => {
        return <Card place={place} image={place.image} key={index} index={index} addToCart={this.props.addToCart(index)}/>
      });

        return (
          <section className="places">
          <h2>Available Places</h2>
            {places}
          </section>
        );
    }
}
