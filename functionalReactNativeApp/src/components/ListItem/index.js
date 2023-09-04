import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';

const ListItem = ({title, subtitle, onPress, style}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle !== undefined && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
      <Image style={styles.icon} source={require('../../assests/arrow.png')} />
    </Pressable>
  );
};

export default ListItem;
