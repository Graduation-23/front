import client from '@api/client';
import logger from '@/utils/logger';

export default function fetchWidget() {
  return new Promise<Widget.Type[]>(resolve => {
    client
      .get('/widget')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
