import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import CustomButton from '../../../components/Button';
import Separator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <View>
          <Input label="Name" placeHolder="John Doe" />
          <Input label="E-mail" placeHolder="example@outlook.com" />
          <Input label="Password" placeHolder="*******" isPassword />
        </View>
        <View style={styles.agreeRow}>
          <CheckBox checked={checked} onChecked={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> & {''}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>

        <CustomButton style={styles.button} title="Sign Up" />
        <Separator text="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
