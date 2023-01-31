import {LinkingOptions} from '@react-navigation/native';

type AppRootParamList = {
  AuthorizationNavigator: undefined;
  ContentNavigator: undefined;
};

export const linking: LinkingOptions<AppRootParamList> = {
  prefixes: ['paiary-app://'],
  config: {
    initialRouteName: 'AuthorizationNavigator',
    screens: {
      AuthorizationNavigator: {
        path: 'authenticate',
      },
      ContentNavigator: {
        path: 'content',
      },
    },
  },
};
