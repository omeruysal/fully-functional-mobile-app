import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 12,
    borderRadius: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textGrey,
    marginBottom: 6,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
});
