import logger from '@/utils/logger';
import client from '@api/client';

export default function updateWidget(widget: Widget.Type) {
  // const form = Utils.transformObjToForm(widget);
  return new Promise<number>(resolve => {
    client
      .put('/widget', widget, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then(r => resolve(r.data.data))
      .catch(logger.error);
  });
}
