/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from '@rneui/themed';
import {ActivityIndicator} from 'react-native';
//import React from 'react';
import {RecoilRoot} from 'recoil';
import SMSWatcher from './src/features/SMSWatcher';
import AppNavigator from './src/Navigator/AppNavigator';
import {theme} from './src/theme';
import {linking} from './src/utils/linking';

const App = () => {
  return (
    <RecoilRoot>
      <SMSWatcher />
      <ThemeProvider theme={theme}>
        <NavigationContainer
          linking={linking}
          fallback={<ActivityIndicator color="blue" size="large" />}>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
