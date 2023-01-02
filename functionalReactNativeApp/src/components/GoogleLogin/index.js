import {TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info : ' + userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleGoogleLogin}>
      {/* <Image source={require('../../assests/google.png')}  style={styles.image}/> */}
      <Text style={styles.text}>G</Text>
    </TouchableOpacity>
  );
};

export default GoogleLogin;
