import client from '@api/client';
import logger from '@/utils/logger';

export default function issueWidget(widget: Widget.Type) {
  return new Promise<number>(resolve => {
    client
      .post('/widget', widget, {
        headers: {'content-type': 'application/json'},
      })
      .then(r => resolve(r.data.data))
      .catch(logger.error);
  });
}
