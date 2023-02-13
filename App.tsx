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
import {QueryClient, QueryClientProvider} from 'react-query';
//import React from 'react';
import {RecoilRoot} from 'recoil';
import AuthenticationSecretary from './src/features/AuthenticationSecretary';
import SMSWatcher from './src/features/SMSWatcher';
import AppNavigator from './src/Navigator/AppNavigator';
import {theme} from './src/theme';
import {linking} from './src/utils/linking';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SMSWatcher />
        <ThemeProvider theme={theme}>
          <NavigationContainer
            linking={linking}
            fallback={<ActivityIndicator color="blue" size="large" />}>
            <AuthenticationSecretary />
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
