import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import {styles} from './style';

const Favorites = ({navigation}) => {
  const renderItem = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return <FavoriteItem {...item} onPress={onProductPress} />;
  };
  return (
    <SafeAreaView>
      <Header title={'Favorites'} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => String(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
