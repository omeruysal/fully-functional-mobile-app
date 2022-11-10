import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assests/splash_image.png')}
      />
      <Text style={styles.title}>You will find</Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
      <Text style={styles.title}>here!</Text>

      <Button title="Sign up" />
    </View>
  );
};

export default Splash;
