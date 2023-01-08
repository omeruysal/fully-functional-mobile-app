import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CustomButton from '../../../components/Button';
import Separator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignIn = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const onSignUp = () => {};
  const onSignIn = () => {
    navigation.navigate('SignUp');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <View>
          <Input label="E-mail" placeHolder="example@outlook.com" />
          <Input label="Password" placeHolder="*******" isPassword />
        </View>

        <CustomButton style={styles.button} title="Sign In" />
        <Separator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Do not have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
