import React, { FC } from 'react';
import styled from 'styled-components';

const Table: FC = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0px;
  caption-side: bottom;
  margin: 1.5rem 0;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  thead > tr {
    td {
      border-bottom: 3px solid rgba(89, 130, 150, 0.3);
    }
  }

  td {
    vertical-align: middle;
    padding: 1em 0.5em;
  }

  tbody {
    td {
      padding: 0.5em;
    }
  }
`;

export default Table;
