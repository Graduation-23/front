import client from '../client';

type CFinance = {
  type: string;
  description: string;
  anothername: string;
  colorcode: string;
};

export default function createFinance({
  type,
  description,
  anothername,
  colorcode,
}: CFinance) {
  return new Promise((res, rej) => {
    client
      .post('/finance/add', {type, description, anothername, colorcode})
      .then(v => {
        console.log(v.data);
      })
      .catch(rej);
  });
}
