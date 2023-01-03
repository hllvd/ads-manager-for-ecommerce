import React from 'react';
import PropTypes from 'prop-types';


export default function Title(props) {
  return (
    <h2>
      {props.children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
