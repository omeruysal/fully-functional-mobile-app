import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const CustomButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
