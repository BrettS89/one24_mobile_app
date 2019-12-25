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
    width: '100%'
  },
  multiButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  multiText: {
    fontWeight: '700',
    color: colors.main,
    marginLeft: 7,
  },
  imageAddedRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  removeText: {
    color: colors.midGrey2,
  }
});
