import client from '@api/client';
import logger from '@/utils/logger';

export default function fetchWidgetById(id: number) {
  return new Promise<Widget.Type>(resolve => {
    client
      .get('/widget/' + id)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
