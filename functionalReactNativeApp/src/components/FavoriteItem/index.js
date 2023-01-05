import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';

const FavoriteItem = ({title, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image
        source={require('../../assests/close.png')}
        style={styles.icon}
        onPress={onPress}
      />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
