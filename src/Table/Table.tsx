import React, { ReactNode } from 'react';

import './Table.scss';

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
};

export type TableProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnDefinitionType<T, K>[];
};

/**
 * A customized element for representing a table.
 * @type {TableProps}
 */
const Table = <T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>): JSX.Element => (
  <table className="table">
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            data-testid={`table-head-${index}`}
            key={`table-head-${index}`}
            align={column.align ?? 'left'}
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr data-testid={`table-row-${index}`} key={`table-row-${index}`}>
          {columns.map((column, index2) => (
            <td
              data-testid={`table-cell-${index2}`}
              align={column.align ?? 'left'}
              key={`table-cell-${index2}`}
            >
              {row[column.key] as ReactNode}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
