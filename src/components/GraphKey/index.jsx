import * as React from 'react';
import { Ripple } from 'react-awesome-spinners';
import Table from '../Table';
import StyledGraphKey from './styled';

const GraphKey = ({ isLoading, race, gender, disability, graphTitle }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Category Description',
        accessor: 'description',
      },
      {
        Header: 'Color',
        accessor: 'color',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        description: 'Major Underrepresentation ',
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'cyan',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Underrepresentation',
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'steelblue',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Proportionate',
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'green',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Overrepresentation',
        color: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                background: 'lightcoral',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
      {
        description: 'Major Overrepresentation',
        color: (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                height: '20px',
                width: '20px',
                background: '#8C001A',
                borderRadius: '50px',
              }}
            ></div>
          </div>
        ),
      },
    ],
    [],
  );
  return (
    <StyledGraphKey>
      {isLoading ? (
        <Ripple />
      ) : race && gender && disability && graphTitle ? (
        <Table columns={columns} data={data} />
      ) : null}
    </StyledGraphKey>
  );
};

export default GraphKey;
