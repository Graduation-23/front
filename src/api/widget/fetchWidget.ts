import client from '@api/client';

export type WidgetRangeType = 'last-week' | 'last-month' | 'all';

export default function fetchWidget(type: WidgetRangeType = 'all') {
  let query = '';

  switch (type) {
    case 'last-month':
      query = 'last-month';
      break;
    case 'last-week':
      query = 'last-week';
      break;
    default:
      break;
  }

  return new Promise<Widget.Type[]>((resolve, reject) => {
    client
      .get(`/widget${query}`)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
