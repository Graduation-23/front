import {PermissionsAndroid} from 'react-native';

export const requestSMSPermission = async () => {
  return await PermissionsAndroid.requestMultiple([
    'android.permission.READ_SMS',
    'android.permission.RECEIVE_SMS',
  ]).catch(() => console.log('err'));
};

type SmsCallbackType = (data: {
  body: string;
  timestamp: string;
  originatingAddress: string;
}) => void;

export const smsCallback: SmsCallbackType = data => {
  if (!filterPhoneNumber(data.originatingAddress)) return;

  console.info(getExpenses(data.body));
};

const TargetPhoneNumbers = ['+8215881600'];

const filterPhoneNumber = (phoneNumber: string) => {
  return TargetPhoneNumbers.indexOf(phoneNumber) !== -1;
};

const ExpensesRegex = /[\d|,]+(?=원|₩)/g;

const getExpenses = (value: string) => {
  return value.match(ExpensesRegex);
};
