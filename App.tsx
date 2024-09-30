import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      {/* Set the StatusBar to be transparent */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <AppNavigator />
    </>
  );
}

export default App;
