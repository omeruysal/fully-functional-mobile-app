import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.blue,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textGrey,
    marginTop: 6,
  },
  icon: {
    height: 24,
    width: 12,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
