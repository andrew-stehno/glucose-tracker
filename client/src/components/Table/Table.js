import React from 'react';
import { Table } from 'reactstrap';

export function Table({ children }) {
  return (
    <div className="table-overflow-container">
      <tr className="table-group">{children}</tr>
    </div>
  );
}

export function TableItem({ children }) {
return <tr className="table-group-item">{children}</tr>;
}


const table = (props) => {
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Glucose Levels</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}


export default table;