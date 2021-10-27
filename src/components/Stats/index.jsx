import * as React from 'react';
import * as d3 from 'd3';
import Table from '../Table';

const Stats = ({ data }) => {
  const raw = data.map((item) => item.x);
  const mean = d3.mean(raw);
  const median = d3.median(raw);
  const mode = d3.mode(raw);
  const deviation = d3.deviation(raw);
  const quartiles = {
    min: d3.quantile(raw, 0),
    first: d3.quantile(raw, 0.25),
    median,
    third: d3.quantile(raw, 0.75),
    max: d3.quantile(raw, 1),
  };
  const columns = React.useMemo(() => [
    {
      Header: 'Metric',
      accessor: 'metric',
    },
    {
      Header: 'Value',
      accessor: 'value',
    },
  ]);
  const rows = React.useMemo(() => [
    {
      metric: 'N',
      value: data.length,
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
  ]);

  return data.length > 1 ? <Table data={rows} columns={columns} /> : null;
};

export default Stats;
