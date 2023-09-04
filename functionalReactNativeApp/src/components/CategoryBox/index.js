import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Input from '../Input';
import {colors} from '../../utils/colors';

const CategoryBox = ({title, image, onPress, isSelected}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: colors.ghostWhite} : {},
        ]}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
