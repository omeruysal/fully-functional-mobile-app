import {View, Text, Linking, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header/index';
import {styles} from './style';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';

const Settings = ({navigation}) => {
  const [editable, setEditable] = useState(false);
  const [form, setForm] = useState({name: 'User', email: 'user@mail.com'});
  const onLogout = () => {};
  const onSave = () => {
    setEditable(false);
  };
  const onChange = (key, value) => {
    setForm(pr => ({...pr, [key]: value}));
  };
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
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={() => setEditable(true)}>
            <Image
              source={require('../../../assests/edit.png')}
              style={styles.editIcon}
            />
          </Pressable>
        </View>
        <EditableBox
          label="Name"
          value={form.name}
          editable={editable}
          onChangeText={v => onChange('name', v)}
        />
        <EditableBox
          label="Email"
          value={form.email}
          editable={onChange}
          onChangeText={v => onChange('email', v)}
        />

        {editable ? (
          <Button title="Save" style={styles.button} onPress={onSave} />
        ) : null}

        <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
        <ListItem onPress={onItemPress} title="FAQ" />
        <ListItem onPress={onItemPress} title="Contact Us" />
        <ListItem onPress={onItemPress} title="Privacy & Terms" />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
