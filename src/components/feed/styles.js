import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    paddingVertical: 15,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
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
    paddingHorizontal: 15,
  },
  content: {
    fontSize: 16,
    flexWrap: 'wrap',
    lineHeight: 22,
    marginBottom: 17,
    marginTop: 7,
  },
  icons: {
    flexDirection: 'row',
    paddingHorizontal: 15,
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
    paddingHorizontal: 20,
  },
  viewCommentsButton: {
    marginTop: 4,

  },
  viewComments : {
    fontWeight: '700',
    fontSize: 13,
    color: colors.main,
  },
  likes: {
    fontSize: 13,
  },
  likesAndComments: {
    paddingHorizontal: 15,
  }
});
