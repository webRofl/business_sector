import { User } from './../types/types';

export const usersSortFunc = (
  isAscending: boolean,
  item: string,
  usersArray: Array<User>
) => {
  const sort = (users: Array<User>): Array<User> => {
    if (users.length < 2) return users;

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

    return isAscending
      ? sort(lower).concat(pivot, sort(greater))
      : sort(greater).concat(pivot, sort(lower));
  };

  return sort(usersArray);
};
