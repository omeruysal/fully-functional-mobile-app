import {
  View,
  Text,
  Linking,
  Pressable,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header/index';
import {styles} from './style';
import Input from '../../../components/Input';
import {launchImageLibrary} from 'react-native-image-picker';

const NewListing = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({name: 'User', email: 'user@mail.com'});
  const onSave = () => {};
  const onChange = (key, value) => {
    setForm(pr => ({...pr, [key]: value}));
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary();
    if (result?.assets?.length) {
      setImages(list => [...list, ...result?.assets]);
      setLoading(false);
    }
  };

  const onDeleteImage = image => {
    setImages(list => {
      const filteredImages = images.filter(
        img => img?.fileName !== image?.fileName,
      );
      return filteredImages;
    });
  };

  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <Header
        title={'Create a new Listing'}
        onBackPress={onBackPress}
        showBack
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Upload photos</Text>
        <View style={styles.imageRow}>
          <TouchableOpacity
            disabled={loading}
            style={styles.uploadContainer}
            onPress={uploadNewImage}>
            <View style={styles.uploadCircle}>
              <Text style={styles.uploadPlus}>+</Text>
            </View>
          </TouchableOpacity>
          {images?.map(image => (
            <View style={styles.imageCont} key={image?.fileName}>
              <Image style={styles.image} source={{uri: image?.uri}} />
              <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                <Image
                  style={styles.delete}
                  source={require('../../../assests/close.png')}
                />
              </Pressable>
            </View>
          ))}
          {loading && <ActivityIndicator />}
        </View>
        <Input label="Title" placeHolder="Listing Title" value={form.title} />
        <Input label="Price" placeHolder="Enter price in USD" />
      </View>
    </SafeAreaView>
  );
};

export default NewListing;
