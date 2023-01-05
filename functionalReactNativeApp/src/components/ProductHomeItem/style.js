import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginBottom: 10,
  },
  title: {
    color: colors.textGrey,
    marginVertical: 5,
  },
  image: {
    width: (width - 74) / 2,
    height: 220,
    borderRadius: 8,
  },
  price: {
    color: colors.black,
  },
});
