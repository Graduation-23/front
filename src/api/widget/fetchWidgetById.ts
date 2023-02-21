import client from '@api/client';

export default function fetchWidgetById(id: number) {
  return new Promise<Widget.Type>((resolve, reject) => {
    client
      .get('/widget/' + id)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
