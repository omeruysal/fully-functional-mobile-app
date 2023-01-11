import {View, Text, Linking} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header/index';
import {styles} from './style';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';

const Settings = ({navigation}) => {
  const onLogout = () => {};
  const onBackPress = () => {
    navigation.goBack();
  };
  const onItemPress = () => {
    Linking.openURL('https://www.google.com');
  };
  return (
    <SafeAreaView>
      <Header
        title={'Settings'}
        onBackPress={onBackPress}
        onLogout={onLogout}
        showBack
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <EditableBox label="Name" value="User" editable={false} />
        <EditableBox label="Email" value="User" editable={true} />
        <Text style={styles.sectionTitle}>Help Center</Text>
        <ListItem onPress={onItemPress} title="FAQ" />
        <ListItem onPress={onItemPress} title="Contact Us" />
        <ListItem onPress={onItemPress} title="Privacy & Terms" />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
