import React from 'react';
import PropTypes from 'prop-types';
import './PizzaComponent.css';

const PizzaComponent = (props) => {
  const name = props.name;
  const price = props.price;

  return (
    <div className="PizzaComponent">
      Name: {name}
      Price: {price}
    </div>
  )
};

PizzaComponent.propTypes = {};

PizzaComponent.defaultProps = {};

export default PizzaComponent;
