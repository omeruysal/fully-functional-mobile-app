import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Input from '../Input';

const Header = ({
  title,
  onBackPress,
  onLogout,
  onSearch,
  keyword,
  showLogout,
  showSearch,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('../../assests/back.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assests/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}

        <Text style={styles.title}>{title}</Text>

        {showLogout ? (
          <Pressable onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require('../../assests/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={keyword}
          placeHolder={'Type your keyword...'}
        />
      ) : null}
    </View>
  );
};

export default React.memo(Header);
