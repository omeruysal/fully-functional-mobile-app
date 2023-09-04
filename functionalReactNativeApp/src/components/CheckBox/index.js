import {Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

const CheckBox = ({checked, onChecked}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChecked(pr => !pr)}>
      {checked && (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assests/white-check.png')}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
