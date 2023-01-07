import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';

const ListItem = ({title, subtitle, onPress}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image style={styles.icon} source={require('../../assests/arrow.png')} />
    </Pressable>
  );
};

export default ListItem;
