import * as d3 from 'd3';

const Stats = ({ data }) => {
  const raw = data.map((item) => item.x);
  const mean = d3.mean(raw);
  const median = d3.median(raw);
  const mode = d3.mode(raw);
  const deviation = d3.deviation(raw);
  const quartiles = {
    zero: d3.quantile(raw, 0),
    first: d3.quantile(raw, 0.25),
    median,
    third: d3.quantile(raw, 0.75),
    one: d3.quantile(raw, 1),
  };
  return data.length > 1 ? (
    <div>
      <h3>Stats</h3>
      <p>Mean: {mean}</p>
      <p>Median: {median}</p>
      <p>Mode: {mode}</p>
      <p>Deviation: {deviation}</p>
      <p>Quartiles</p>
      <p>0: {quartiles.zero}</p>
      <p>First: {quartiles.first}</p>
      <p>Median: {quartiles.median}</p>
      <p>Third: {quartiles.third}</p>
      <p>1: {quartiles.one}</p>
    </div>
  ) : null;
};

export default Stats;
