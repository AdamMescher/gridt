import * as React from 'react';
import * as d3 from 'd3';
import StyledStats from './styled';
import Table from '../Table';

const Stats = ({ data }) => {
  let raw;
  let mean;
  let median;
  let mode;
  let deviation;
  let quartiles;
  let n;
  n = n > 1 ? data.length : 'No data';
  raw = data.map((item) => item.x) || 'No data';
  mean = d3.mean(raw) || 'No data';
  median = d3.median(raw) || 'No data';
  mode = d3.mode(raw) || 'No data';
  deviation = d3.deviation(raw) || 'No data';
  quartiles = {
    min: d3.quantile(raw, 0) || 'No data',
    first: d3.quantile(raw, 0.25) || 'No data',
    median,
    third: d3.quantile(raw, 0.75) || 'No data',
    max: d3.quantile(raw, 1) || 'No data',
  };
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
  return data.length ? (
    <StyledStats>
      <Table data={rows} columns={columns} />
    </StyledStats>
  ) : null;
};

export default Stats;
