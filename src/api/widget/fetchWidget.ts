import client from '@api/client';

export default function fetchWidget() {
  return new Promise<Widget.Type[]>((resolve, reject) => {
    client
      .get('/widget')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
