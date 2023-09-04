import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomButton from '../../../components/Button';

const Splash = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assests/splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You will find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
        <Text style={styles.title}>here!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Sign up" onPress={onSignUp} />
      </View>
      <Pressable hitSlop={20} onPress={onSignIn}>
        <Text style={styles.footer}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
