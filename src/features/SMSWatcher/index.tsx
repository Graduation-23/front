import {Component, ReactNode} from 'react';
import SmsReader from 'react-native-sms-reader';

export type SMSWatcherProps = {};

export default class ReadSMSComponent extends Component {
  constructor(props: SMSWatcherProps | Readonly<SMSWatcherProps>) {
    super(props);
  }

  render(): ReactNode {
    return <></>;
  }

  componentWillMount = () => {
    this.startReadSMS();
  };

  startReadSMS = async () => {
    const hasPermission = await SmsReader.requestReadSMSPermission();
    console.log(hasPermission);
    if (hasPermission) {
      SmsReader.startReadSMS((status, sms) => {
        console.log('hello');
        if (status === 'success') {
          console.log('Great!! you have received new sms:', sms);
        }
      });
    }
  };

  componentWillUnmount = () => {
    SmsReader.stopReadSMS();
  };
}
