export const Entry = {
  Auth: 'AuthorizationNavigator',
  Content: 'ContentNavigator',
};

export const Diary = Object.freeze({
  Main: 'Diary',
  Write: 'DiaryWrite',
  Read: 'DiaryRead',
});

export const Setting = Object.freeze({
  Main: 'Setting',
  LinkUpPayment: 'LinkUpPayment',
  UserInfo: 'UserInfo',
  Notice: 'Notice',
});

export const Account = Object.freeze({
  Main: 'Book',
});

export const Content = Object.freeze({
  DiaryTab: 'DiaryNavigator',
  HomeTab: 'HomeNavigator',
  BookTab: 'BookNavigator',
  SettingTab: 'SettingNavigator',
});

export const Auth = Object.freeze({
  Login: 'Login',
  SignUp: 'SignUp',
  Birth: 'Birth',
  Card: 'Card',
});
