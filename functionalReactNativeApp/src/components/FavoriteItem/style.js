import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingVertical: 16,
  },
  title: {
    color: colors.textGrey,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  price: {
    color: colors.black,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
});
