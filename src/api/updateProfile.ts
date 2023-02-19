import client from './client';
import logger from '@/utils/logger';
import {Photo} from '@/utils/photo';

export default function updateProfile(profile: Photo) {
  const form = new FormData();

  form.append('profilePic', profile);

  return new Promise(resolve => {
    client
      .put(`/user/profile-pic`, form, {
        headers: {'Content-Type': 'multipart/form-data', Accept: '*/*'},
      })
      .then(res => resolve(res.data.data))
      .catch(logger.log);
  });
}
