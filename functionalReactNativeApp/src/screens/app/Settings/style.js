import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
