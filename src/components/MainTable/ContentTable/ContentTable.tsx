import React from 'react';
import classes from './ContentTable.module.css';

const ContentTable = () => {
  return (
    <table>
      <tbody>
        <tr className={classes.mainTable__tr}>
          <td>1</td>
          <td>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </td>
          <td>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContentTable;
