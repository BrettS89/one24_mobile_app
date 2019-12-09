import { StyleSheet } from 'react-native';

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
    height: 60,
    borderRadius: 30,
    width: 60,
    marginRight: 20,
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
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  middleIcon: {
    marginHorizontal: 15,
  }
});
