import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const Button = ({title}) => {
  const handlePress = () => {};
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
