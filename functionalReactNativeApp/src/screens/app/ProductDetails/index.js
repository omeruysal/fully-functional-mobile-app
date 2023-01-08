import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import Button from '../../../components/Button/index';
import ImageCarousel from '../../../components/ImageCarousel';

const ProductDetails = ({route, navigation}) => {
  const {product} = route?.params || {};
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image source={{uri: product?.image}} style={styles.image} />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require('../../../assests/back.png')}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require('../../../assests/bookmark.png')}
          />
        </Pressable>
        <Button title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
