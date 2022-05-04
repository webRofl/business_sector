export type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const id = 'id';
const title = 'title';
const body = 'body';

export type Item = typeof id | typeof title | typeof body;
