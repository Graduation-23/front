import client from '@api/client';
import logger from '@/utils/logger';

export default function fetchWidgetWithDate(year: string, month: string) {
  return new Promise<Widget.Type[]>(resolve => {
    client
      .get(`/widget/date/${year}/${month}`)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
