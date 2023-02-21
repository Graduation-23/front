import logger from '@/utils/logger';
import client from '@api/client';

export default function updateWidget(widget: Widget.Type) {
  return new Promise<number>(resolve => {
    client
      .put('/widget', widget, {
        headers: {'content-type': 'application/x-www-form-urlencoded'},
      })
      .then(r => resolve(r.data.data))
      .catch(logger.error);
  });
}
