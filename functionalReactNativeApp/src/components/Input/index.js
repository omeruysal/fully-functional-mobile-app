import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';

const Input = ({label, placeHolder, isPassword}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(pr => !pr);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeHolder}
          style={styles.input}
        />
        {isPassword && (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={require('../../assests/eye.png')}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;
