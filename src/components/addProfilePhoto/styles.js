import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 75,
  },
  profileImage: {
    height: 150,
    borderRadius: 75,
    width: 150,
    marginBottom: 15,
  },
  btnText: {
    fontWeight: '700',
    color: colors.main,
  },
  uploadBtn: {
    marginBottom: 50,
  },
  finishButton: {
    flexDirection: 'row', 
  }
});
