import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import store from './redux';
import Navigation from './navigation';
import LoadingModal from './shared/components/loadingModal';

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Navigation />
          <LoadingModal />
        </View>
      </Provider>
    );
  }
}

export default AppContainer;
