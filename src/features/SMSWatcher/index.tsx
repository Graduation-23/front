import {Component, ReactNode} from 'react';
import {Platform} from 'react-native';
// import '../../../types/react-native-android-sms-listener';
import SmsListener from 'react-native-android-sms-listener';
import {requestSMSPermission, smsCallback} from '../../utils/smsHelper';

export type SMSWatcherProps = {};

export default class ReadSMSComponent extends Component<
  {},
  {
    subscriber: {remove: () => void} | null;
  }
> {
  constructor(props: SMSWatcherProps | Readonly<SMSWatcherProps>) {
    super(props);
    this.state = {
      subscriber: null,
    };
  }

  render(): ReactNode {
    return <></>;
  }

  componentDidMount = () => {
    if (Platform.OS === 'android') this.startReadSMS();
  };

  startReadSMS = async () => {
    if (await requestSMSPermission()) {
      let subscriber: any = SmsListener.addListener(smsCallback);
      this.setState({subscriber});
    }
  };

  componentWillUnmount = () => {
    if (this.state.subscriber) {
      this.state.subscriber.remove();
    }
  };
}
