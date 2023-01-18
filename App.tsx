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
//import React from 'react';
import {RecoilRoot} from 'recoil';
import AppNavigator from './src/Navigator/AppNavigator';
import {theme} from './src/theme';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
