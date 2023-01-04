import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Input from '../Input';

const CategoryBox = ({title, image, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
