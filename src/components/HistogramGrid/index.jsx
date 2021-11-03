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
  comparison,
  AMF,
  AMFWHF,
  AMM,
  AMMWHM,
  ASF,
  ASFWHF,
  ASM,
  ASMWHM,
  BLF,
  BLFWHF,
  BLM,
  BLMWHM,
  HIF,
  HIFWHF,
  HIM,
  HIMWHM,
  HPF,
  HPFWHF,
  HPM,
  HPMWHM,
  TRF,
  TRFWHF,
  TRM,
  TRMWHM,
  WHF,
  WHFWHF,
  WHM,
  WHMWHM,
}) => {
  return (
    <StyledHistogramGrid>
      <div className="graphs-container">
        {AMF ? (
          <Histogram
            data={AMF}
            race={{ value: 'AM' }}
            gender={{ value: 'F' }}
            selectedSchool={school}
            title="AMF"
          />
        ) : null}
        {AMFWHF ? (
          <Histogram
            data={AMFWHF}
            race={{ value: 'AM' }}
            gender={{ value: 'F' }}
            selectedSchool={school}
            title="AMFWHF"
          />
        ) : null}
        {AMM ? (
          <Histogram
            data={AMM}
            selectedSchool={school}
            race={{ value: 'AM' }}
            gender={{ value: 'M' }}
            title="AMM"
          />
        ) : null}
        {AMMWHM ? (
          <Histogram
            data={AMMWHM}
            race={{ value: 'AM' }}
            gender={{ value: 'M' }}
            selectedSchool={school}
            title="AMWHM"
          />
        ) : null}
        {ASF ? (
          <Histogram
            data={ASF}
            selectedSchool={school}
            race={{ value: 'AS' }}
            gender={{ value: 'F' }}
            title="ASF"
          />
        ) : null}
        {ASFWHF ? (
          <Histogram
            data={ASFWHF}
            selectedSchool={school}
            race={{ value: 'AS' }}
            gender={{ value: 'F' }}
            title="ASFWHF"
          />
        ) : null}
        {ASM ? (
          <Histogram
            data={ASM}
            selectedSchool={school}
            race={{ value: 'AS' }}
            gender={{ value: 'M' }}
            title="ASM"
          />
        ) : null}
        {ASMWHM ? (
          <Histogram
            data={ASMWHM}
            selectedSchool={school}
            race={{ value: 'AS' }}
            gender={{ value: 'M' }}
            title="ASMWHM"
          />
        ) : null}
        {BLF ? (
          <Histogram
            data={BLF}
            selectedSchool={school}
            race={{ value: 'BL' }}
            gender={{ value: 'F' }}
            title="BLF"
          />
        ) : null}
        {BLFWHF ? (
          <Histogram
            data={BLFWHF}
            selectedSchool={school}
            race={{ value: 'BL' }}
            gender={{ value: 'F' }}
            title="BLFWHF"
          />
        ) : null}
        {BLM ? (
          <Histogram
            data={BLM}
            selectedSchool={school}
            race={{ value: 'BL' }}
            gender={{ value: 'M' }}
            title="BLM"
          />
        ) : null}
        {BLMWHM ? (
          <Histogram
            data={BLMWHM}
            selectedSchool={school}
            race={{ value: 'BL' }}
            gender={{ value: 'M' }}
            title="BLMWHM"
          />
        ) : null}
        {HIF ? (
          <Histogram
            data={HIF}
            selectedSchool={school}
            race={{ value: 'HI' }}
            gender={{ value: 'F' }}
            title="HIF"
          />
        ) : null}
        {HIFWHF ? (
          <Histogram
            data={HIFWHF}
            selectedSchool={school}
            race={{ value: 'HI' }}
            gender={{ value: 'F' }}
            title="HIFWHF"
          />
        ) : null}
        {HIM ? (
          <Histogram
            data={HIM}
            selectedSchool={school}
            race={{ value: 'HI' }}
            gender={{ value: 'M' }}
            title="HIM"
          />
        ) : null}
        {HIMWHM ? (
          <Histogram
            data={HIMWHM}
            selectedSchool={school}
            race={{ value: 'HI' }}
            gender={{ value: 'M' }}
            title="HIMWHM"
          />
        ) : null}
        {HPF ? (
          <Histogram
            data={HPF}
            selectedSchool={school}
            race={{ value: 'HP' }}
            gender={{ value: 'F' }}
            title="HPF"
          />
        ) : null}
        {HPFWHF ? (
          <Histogram
            data={HPFWHF}
            selectedSchool={school}
            race={{ value: 'HP' }}
            gender={{ value: 'F' }}
            title="HPFWHF"
          />
        ) : null}
        {HPM ? (
          <Histogram
            data={HPM}
            selectedSchool={school}
            race={{ value: 'HP' }}
            gender={{ value: 'M' }}
            title="HPM"
          />
        ) : null}
        {HPMWHM ? (
          <Histogram
            data={HPMWHM}
            selectedSchool={school}
            race={{ value: 'HP' }}
            gender={{ value: 'M' }}
            title="HPMWHM"
          />
        ) : null}
        {TRF ? (
          <Histogram
            data={TRF}
            selectedSchool={school}
            race={{ value: 'TR' }}
            gender={{ value: 'F' }}
            title="TRF"
          />
        ) : null}
        {TRFWHF ? (
          <Histogram
            data={TRFWHF}
            selectedSchool={school}
            race={{ value: 'TR' }}
            gender={{ value: 'F' }}
            title="TRFWHF"
          />
        ) : null}
        {TRM ? (
          <Histogram
            data={TRM}
            selectedSchool={school}
            race={{ value: 'TR' }}
            gender={{ value: 'M' }}
            title="TRM"
          />
        ) : null}
        {TRMWHM ? (
          <Histogram
            data={TRMWHM}
            selectedSchool={school}
            race={{ value: 'TR' }}
            gender={{ value: 'M' }}
            title="TRMWHF"
          />
        ) : null}
        {WHF ? (
          <Histogram
            data={WHF}
            selectedSchool={school}
            race={{ value: 'WH' }}
            gender={{ value: 'F' }}
            title="WHF"
          />
        ) : null}
        {WHFWHF ? (
          <Histogram
            data={WHFWHF}
            selectedSchool={school}
            race={{ value: 'WH' }}
            gender={{ value: 'F' }}
            title="WHFWHF"
          />
        ) : null}
        {WHM ? (
          <Histogram
            data={WHM}
            selectedSchool={school}
            race={{ value: 'WH' }}
            gender={{ value: 'M' }}
            title="WHM"
          />
        ) : null}
        {WHMWHM ? (
          <Histogram
            data={WHMWHM}
            selectedSchool={school}
            race={{ value: 'WH' }}
            gender={{ value: 'M' }}
            title="WHMWHM"
          />
        ) : null}
      </div>
    </StyledHistogramGrid>
  );
};

export default HistogramGrid;
