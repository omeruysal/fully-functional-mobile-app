import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header/index';
import {styles} from './style';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';

const Profile = ({navigation}) => {
  const num = 10;
  const onLogout = () => {};
  const onPressSettings = () => {
    navigation.navigate('Settings');
  };
  const onAddNewListing = () => {
    navigation.navigate('NewListing');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Profile'} showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>Username</Text>
          <Text style={styles.email}>User email</Text>
          <ListItem title="My Listings" subtitle={`You have ${num} listing`} />
          <ListItem
            title="Settings"
            subtitle="Account, FAQ, Contact"
            onPress={onPressSettings}
          />
        </View>
        <Button
          title="Add new listing"
          style={{flex: 0}}
          onPress={onAddNewListing}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
