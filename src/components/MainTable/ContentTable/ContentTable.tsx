import React from 'react';
import { User } from '../../../types/types';
import classes from './ContentTable.module.css';

type ContentTableProps = {
  users: User[];
  foundUsers: User[];
};

const ContentTable: React.FC<ContentTableProps> = (props) => {
  const uploadUsers = (users: Array<User>) => {
    return users.map((user) => {
      return (
        <tr className={classes.mainTable__tr} key={user.id}>
          <td className={classes.mainTable__id}>{user.id}</td>
          <td className={classes.mainTable__title}>{user.title}</td>
          <td className={classes.mainTable__body}>{user.body}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <tbody>
        {props.foundUsers.length
          ? uploadUsers(props.foundUsers)
          : uploadUsers(props.users)}
      </tbody>
    </table>
  );
};

export default ContentTable;
