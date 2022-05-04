import { User } from './../types/types';

export const usersSort = (
  isAscending: boolean,
  item: string,
  usersArray: Array<User>
) => {
  const sort = (users = usersArray): Array<User> => {
    const pivotIndex = Math.ceil((users.length - 1) / 2);
    const pivot = users[pivotIndex] as any;
    const greater = [];
    const lower = [];

    for (let i = 0; i < pivotIndex; i += 1) {
      const sortString = pivot[item];
      //@ts-ignore
      if (sortString > users[i][item]) greater.push(users[i]);
      else lower.push(users[i]);
    }

    for (let i = pivotIndex + 1; i < users.length; i += 1) {
      const sortString = pivot[item];
      //@ts-ignore
      if (sortString > users[i][item]) greater.push(users[i]);
      else lower.push(users[i]);
    }

    return sort(lower).concat(pivot, sort(greater));
  };

  return sort();
};
