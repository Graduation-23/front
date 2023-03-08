import logger from '@/utils/logger';
import client from '@api/client';
import {ToastAndroid} from 'react-native';

export default function issueDiary(date: string) {
  return new Promise<number>(resolve => {
    client
      .post(`/diary?date=${date}`, {
        Headers: {
          'Content-type': 'application/json',
        },
      })
      .then(r => resolve(r.data.data))
      .catch(e => {
        ToastAndroid.show(
          '이미 있거나 올바르지 않은 날짜입니다.',
          ToastAndroid.SHORT,
        );
        logger.error(e);
      });
  });
}
