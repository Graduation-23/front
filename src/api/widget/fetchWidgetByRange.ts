import client from '@api/client';

import logger from '@/utils/logger';

export type FetchSearchOptions = {
  type: Widget.SearchOption;
  payload?: any;
};

export default function fetchWidgetByRange({
  type,
  payload,
}: FetchSearchOptions) {
  let query = '';

  switch (type) {
    case 'all':
      break;
    case 'last-month':
      query = '/last-month';
      break;
    case 'last-week':
      query = '/last-week';
      break;
    case 'month':
      query = `/date/${payload.year}/${payload.month}`;
      break;
    case 'year':
      query = `/date/${payload.year}`;
      break;
  }

  return new Promise<Widget.Type[]>(resolve => {
    client
      .get(`/widget${query}`)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
