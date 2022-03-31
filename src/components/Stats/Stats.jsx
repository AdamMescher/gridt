import * as React from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { Ellipsis } from 'react-awesome-spinners';
import Table from '../Table';

const Stats = ({ data, isLoading, visible }) => {
  let raw;
  let mean;
  let median;
  let mode;
  let deviation;
  let quartiles;
  let n;
  n = data?.length || 0;
  raw = data?.map((item) => item.x) || 'No data';
  if (raw === 'No data') {
    mean = 'No data';
    median = 'No data';
    mode = 'No data';
    deviation = 'No data';
    quartiles = {
      min: 'No data',
      first: 'No data',
      median: 'No data',
      third: 'No data',
      max: 'No data',
    };
  } else {
    mean = d3.mean(raw);
    median = d3.median(raw);
    mode = d3.mode(raw);
    deviation = d3.deviation(raw);
    quartiles = {
      min: d3.quantile(raw, 0),
      first: d3.quantile(raw, 0.25),
      median,
      third: d3.quantile(raw, 0.75),
      max: d3.quantile(raw, 1),
    };
  }
  const columns = React.useMemo(
    () => [
      {
        Header: 'Metric',
        accessor: 'metric',
      },
      {
        Header: 'Value',
        accessor: 'value',
      },
    ],
    [],
  );
  const rows = React.useMemo(
    () => [
      {
        metric: 'N',
        value: n,
      },
      {
        metric: 'Mean',
        value: mean,
      },
      {
        metric: 'Median',
        value: median,
      },
      {
        metric: 'Mode',
        value: mode,
      },
      {
        metric: 'Standard Deviation',
        value: deviation,
      },
      {
        metric: 'IQR Min',
        value: quartiles.min,
      },
      {
        metric: 'IQR First',
        value: quartiles.first,
      },
      {
        metric: 'IQR Median',
        value: quartiles.median,
      },
      {
        metric: 'IQR Third',
        value: quartiles.third,
      },
      {
        metric: 'IQR Max',
        value: quartiles.max,
      },
    ],
    [
      n,
      deviation,
      mean,
      median,
      mode,
      quartiles.first,
      quartiles.max,
      quartiles.median,
      quartiles.min,
      quartiles.third,
    ],
  );
  if (isLoading) {
    return (
      <LoadingWrapper data-testid="stats-loading">
        <Ellipsis />
      </LoadingWrapper>
    );
  }
  if (visible) {
    return (
      <Wrapper>
        <Table data={rows} columns={columns} />
      </Wrapper>
    );
  }
  return null;
};

const LoadingWrapper = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  align-self: center;
  flex-grow: 1;
  font-size: 12px;
`;

export default Stats;
