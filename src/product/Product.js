import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import PropTypes from 'prop-types';

// import styles from './styles';

const Product = props => {
  const { favorited } = props;

  return (
    <View style={styles.container}>
      <Text>Product Test</Text>
    </View>
  );
};

Product.propTypes = {};

Product.defaultProps = {};

const styles = {
  container: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
};

export default Product;
