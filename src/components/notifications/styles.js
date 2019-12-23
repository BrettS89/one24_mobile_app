import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 70,
    borderRadius: 35,
    width: 70,
    marginRight: 15,
  },
  mainText: {
    fontWeight: '700',
    flexWrap: 'wrap',
    fontSize: 16,
  },
});
