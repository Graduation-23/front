import client from '@api/client';

export default function fetchWidgetWithDate(year: string, month: string) {
  return new Promise<Widget.Type[]>((resolve, reject) => {
    client
      .get(`/widget/date/${year}/${month}`)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
