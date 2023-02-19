import client from '@api/client';

export default function issueWidget(widget: Widget.Type) {
  return new Promise<number>((resolve, reject) => {
    client
      .post('/widget', widget, {
        headers: {'content-type': 'application/x-www-form-urlencoded'},
      })
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
