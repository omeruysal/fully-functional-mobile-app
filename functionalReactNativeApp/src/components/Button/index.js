import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const CustomButton = ({title}) => {
  const handlePress = () => {};
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
