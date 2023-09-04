import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {styles} from './style';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      setFilteredProducts(
        products.filter(product => product.category === selectedCategory),
      );
    } else if (selectedCategory && keyword) {
      setFilteredProducts(
        products.filter(
          product =>
            product.category === selectedCategory &&
            product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
        ),
      );
    } else if (!selectedCategory && keyword) {
      setFilteredProducts(
        products.filter(product =>
          product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
        ),
      );
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item}) => {
    return (
      <CategoryBox
        title={item?.title}
        image={item?.image}
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
      />
    );
  };
  const renderProductItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product});
    };
    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };
  return (
    <SafeAreaView>
      <Header
        title={'Find all you need'}
        showSearch
        onSearch={setKeyword}
        keyword={keyword}
      />
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => String(item.id)}
          style={styles.productList}
          ListFooterComponent={<View style={{height: 250}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
