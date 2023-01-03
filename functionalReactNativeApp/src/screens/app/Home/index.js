import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Home;
