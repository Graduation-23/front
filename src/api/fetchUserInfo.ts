import client from './client';
import logger from '@/utils/logger';

export type IUser = {
  id: string;
  nickname: string;
  created: Date;
  accessType: string;
  fresh: boolean;
  birth: string;
  profilePicUrl?: string;
};

export default function fetchUserInfo(fresh = false) {
  return new Promise<IUser>(resolve => {
    client
      .get('/user/')
      .then(response => {
        response.data.data.fresh = fresh;
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
