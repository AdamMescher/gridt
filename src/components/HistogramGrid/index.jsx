import * as React from 'react';
import styled from 'styled-components';
import Histogram from '../Histogram';

const StyledHistogramGrid = styled.div`
  .graphs-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const HistogramGrid = ({
  school,
  AMF,
  AMM,
  ASF,
  ASM,
  BLF,
  BLM,
  HIF,
  HIM,
  HPF,
  HPM,
  TRF,
  TRM,
  WHF,
  WHM,
}) => {
  return (
    <StyledHistogramGrid>
      <div className="graphs-container">
        {AMF ? (
          <Histogram data={AMF} selectedSchool={school} title="AMF" />
        ) : null}
        {AMM ? (
          <Histogram data={AMM} selectedSchool={school} title="AMM" />
        ) : null}
        {ASF ? (
          <Histogram data={ASF} selectedSchool={school} title="ASF" />
        ) : null}
        {ASM ? (
          <Histogram data={ASM} selectedSchool={school} title="ASM" />
        ) : null}
        {BLF ? (
          <Histogram data={BLF} selectedSchool={school} title="BLF" />
        ) : null}
        {BLM ? (
          <Histogram data={BLM} selectedSchool={school} title="BLM" />
        ) : null}
        {HIF ? (
          <Histogram data={HIF} selectedSchool={school} title="HIF" />
        ) : null}
        {HIM ? (
          <Histogram data={HIM} selectedSchool={school} title="HIM" />
        ) : null}
        {HPF ? (
          <Histogram data={HPF} selectedSchool={school} title="HPF" />
        ) : null}
        {HPM ? (
          <Histogram data={HPM} selectedSchool={school} title="HPM" />
        ) : null}
        {TRF ? (
          <Histogram data={TRF} selectedSchool={school} title="TRF" />
        ) : null}
        {TRM ? (
          <Histogram data={TRM} selectedSchool={school} title="TRM" />
        ) : null}
        {WHF ? (
          <Histogram data={WHF} selectedSchool={school} title="WHF" />
        ) : null}
        {WHM ? (
          <Histogram data={WHM} selectedSchool={school} title="WHM" />
        ) : null}
      </div>
    </StyledHistogramGrid>
  );
};

export default HistogramGrid;
