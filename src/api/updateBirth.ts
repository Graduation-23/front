import client from './client';
import logger from '@/utils/logger';
import {IUser} from './fetchUserInfo';

export default function updateBirth(date: string) {
  return new Promise<IUser>(resolve => {
    client
      .put(`/user/birth?date=` + date)
      .then(response => {
        resolve(response.data);
      })
      .catch(logger.error);
  });
}
