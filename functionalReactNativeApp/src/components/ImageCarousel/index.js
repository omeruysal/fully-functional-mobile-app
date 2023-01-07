import {Dimensions, FlatList, Image, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';

const {width} = Dimensions.get('window');

const ImageCarousel = ({images}) => {
  const handleScrollEnd = e => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);
    setActiveIndex(index);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem = ({item}) => {
    return <Image style={styles.image} source={{uri: item}} />;
  };
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        style={styles.list}
        data={images}
        renderItem={renderItem}
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
