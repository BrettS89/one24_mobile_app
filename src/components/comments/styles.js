import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: '86%',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.midGrey
  }
});
