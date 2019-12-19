import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 70,
    borderRadius: 35,
    width: 70,
    marginRight: 15,
  },
  userName: {
    fontWeight: '700',
    fontSize: 18,
  },
  contentContainer: {

  },
  content: {
    fontSize: 16,
    flexWrap: 'wrap',
    lineHeight: 22,
    marginBottom: 20,
    marginTop: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  middleIcon: {
    marginHorizontal: 15,
  },
  userIcon: {
    padding: 10,
  },
  optionsButtonContainer: {
    position: 'absolute',
    top: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    justifyContent: 'flex-end',
    zIndex: 50,
  },
});
