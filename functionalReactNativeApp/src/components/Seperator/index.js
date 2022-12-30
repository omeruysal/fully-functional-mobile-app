import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';

const Seperator = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Seperator;
