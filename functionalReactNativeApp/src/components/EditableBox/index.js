import {View, Text, Image, Pressable, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';

const EditableBox = ({value, label, onChangeText, editable, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        editable={editable}
      />
    </View>
  );
};

export default EditableBox;
