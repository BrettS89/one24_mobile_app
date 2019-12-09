import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'space-between',
  },
  multiMedia: {
    flexDirection: 'row',
    marginTop: 13,
    marginBottom: 15,
  },
  multiButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  multiText: {
    fontWeight: '700',
    color: colors.main,
    marginLeft: 7,
  },
  addPostButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: colors.main,
    borderRadius: 50,
  },
  addPostText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  }
});
