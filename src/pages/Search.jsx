// 1. generate 14 histograms based on comparisons with line
//    - show all graphs, only show lines + recommendation when appropriate
// 2. render table with all datapoints
// 3. create school profile card component
// GIVE USER THE OPTIONS TO GET ALL DATA TO SPEED APP UP?!?
// WHAT MIGHT THAT LOOK LIKE ?
import * as React from 'react';
import { useApolloClient } from '@apollo/client';
import { useParams } from 'react-router-dom';
import localForage from 'localforage';
import AsyncSelectInput from '../components/AsyncSelectInput';
import SchoolRiskRatiosTable from '../components/SchoolRiskRatiosTable';
import HistogramGrid from '../components/HistogramGrid';
import fetchSchools from '../utils/fetchSchools';
import queries from '../utils/queries';
import generateQueryVariables from '../utils/generateQueryVariables';
import getGraphData from '../utils/getGraphData';

const Search = () => {
  const [comparison, setComparison] = React.useState('pop');
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [AMF, setAMF] = React.useState(null);
  const [AMM, setAMM] = React.useState(null);
  const [ASF, setASF] = React.useState(null);
  const [ASM, setASM] = React.useState(null);
  const [BLF, setBLF] = React.useState(null);
  const [BLM, setBLM] = React.useState(null);
  const [HIF, setHIF] = React.useState(null);
  const [HIM, setHIM] = React.useState(null);
  const [HPF, setHPF] = React.useState(null);
  const [HPM, setHPM] = React.useState(null);
  const [TRF, setTRF] = React.useState(null);
  const [TRM, setTRM] = React.useState(null);
  const [WHF, setWHF] = React.useState(null);
  const [WHM, setWHM] = React.useState(null);
  const [AMFWHF, setAMFWHF] = React.useState(null);
  const [AMMWHM, setAMMWHM] = React.useState(null);
  const [ASFWHF, setASFWHF] = React.useState(null);
  const [ASMWHM, setASMWHM] = React.useState(null);
  const [BLFWHF, setBLFWHF] = React.useState(null);
  const [BLMWHM, setBLMWHM] = React.useState(null);
  const [HIFWHF, setHIFWHF] = React.useState(null);
  const [HIMWHM, setHIMWHM] = React.useState(null);
  const [HPFWHF, setHPFWHF] = React.useState(null);
  const [HPMWHM, setHPMWHM] = React.useState(null);
  const [TRFWHF, setTRFWHF] = React.useState(null);
  const [TRMWHM, setTRMWHM] = React.useState(null);
  const [WHFWHF, setWHFWHF] = React.useState(null);
  const [WHMWHM, setWHMWHM] = React.useState(null);
  const client = useApolloClient();
  const { id } = useParams();
  const fetchAMF = async () => {
    const query = queries.SCHOOLS_AM_F_QUERY;
    const variables = generateQueryVariables('pop', 'AM', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchAMM = async () => {
    const query = queries.SCHOOLS_AM_M_QUERY;
    const variables = await generateQueryVariables('pop', 'AM', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchASF = async () => {
    const query = queries.SCHOOLS_AS_F_QUERY;
    const variables = await generateQueryVariables('pop', 'AS', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchASM = async () => {
    const query = queries.SCHOOLS_AS_M_QUERY;
    const variables = await generateQueryVariables('pop', 'AS', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchBLF = async () => {
    const query = queries.SCHOOLS_BL_F_QUERY;
    const variables = await generateQueryVariables('pop', 'BL', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchBLM = async () => {
    const query = queries.SCHOOLS_BL_M_QUERY;
    const variables = await generateQueryVariables('pop', 'BL', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchHIF = async () => {
    const query = queries.SCHOOLS_HI_F_QUERY;
    const variables = await generateQueryVariables('pop', 'HI', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchHIM = async () => {
    const query = queries.SCHOOLS_HI_M_QUERY;
    const variables = await generateQueryVariables('pop', 'HI', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchHPF = async () => {
    const query = queries.SCHOOLS_HP_F_QUERY;
    const variables = await generateQueryVariables('pop', 'HP', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchHPM = async () => {
    const query = queries.SCHOOLS_HP_M_QUERY;
    const variables = await generateQueryVariables('pop', 'HP', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchTRF = async () => {
    const query = queries.SCHOOLS_TR_F_QUERY;
    const variables = await generateQueryVariables('pop', 'TR', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchTRM = async () => {
    const query = queries.SCHOOLS_TR_M_QUERY;
    const variables = await generateQueryVariables('pop', 'TR', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchWHF = async () => {
    const query = queries.SCHOOLS_WH_F_QUERY;
    const variables = await generateQueryVariables('pop', 'WH', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchWHM = async () => {
    const query = queries.SCHOOLS_TR_F_QUERY;
    const variables = await generateQueryVariables('pop', 'WH', 'M');
    return await fetchSchools(client, query, variables);
  };
  const fetchAMFWHF = async () => {
    const query = queries.SCHOOLS_AM_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'AM', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchAMMWHM = async () => {
    const query = queries.SCHOOLS_AM_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'AM', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchASFWHF = async () => {
    const query = queries.SCHOOLS_AS_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'AS', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchASMWHM = async () => {
    const query = queries.SCHOOLS_AS_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'AS', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchBLFWHF = async () => {
    const query = queries.SCHOOLS_BL_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'BL', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchBLMWHM = async () => {
    const query = queries.SCHOOLS_BL_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'BL', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchHIFWHF = async () => {
    const query = queries.SCHOOLS_HI_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'HI', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchHIMWHM = async () => {
    const query = queries.SCHOOLS_HI_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'HI', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchHPFWHF = async () => {
    const query = queries.SCHOOLS_HP_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'HP', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchHPMWHM = async () => {
    const query = queries.SCHOOLS_HP_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'HP', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchTRFWHF = async () => {
    const query = queries.SCHOOLS_TR_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'TR', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchTRMWHM = async () => {
    const query = queries.SCHOOLS_TR_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'TR', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchWHFWHF = async () => {
    const query = queries.SCHOOLS_WH_F_WH_F_QUERY;
    const variables = generateQueryVariables('wh', 'WH', 'F');
    return await fetchSchools(client, query, variables);
  };
  const fetchWHMWHM = async () => {
    const query = queries.SCHOOLS_WH_M_WH_M_QUERY;
    const variables = generateQueryVariables('wh', 'WH', 'F');
    return await fetchSchools(client, query, variables);
  };
  React.useState(
    async () => await getGraphData('SCHOOLS_AM_F_QUERY', fetchAMF, setAMF),
    [AMF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_AM_M_QUERY', fetchAMM, setAMM),
    [AMM],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_AS_F_QUERY', fetchASF, setASF),
    [ASF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_AS_M_QUERY', fetchASM, setASM),
    [ASM],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_BL_F_QUERY', fetchBLF, setBLF),
    [BLF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_BL_M_QUERY', fetchBLM, setBLM),
    [BLM],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_HI_F_QUERY', fetchHIF, setHIF),
    [HIF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_HI_M_QUERY', fetchHIM, setHIM),
    [HIM],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_HP_F_QUERY', fetchHPF, setHPF),
    [HPF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_HP_M_QUERY', fetchHPM, setHPM),
    [HPM],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_TR_F_QUERY', fetchTRF, setTRF),
    [TRF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_TR_M_QUERY', fetchTRM, setTRM),
    [TRM],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_WH_F_QUERY', fetchWHF, setWHF),
    [WHF],
  );
  React.useState(
    async () => await getGraphData('SCHOOLS_WH_M_QUERY', fetchWHM, setWHM),
    [WHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_AM_F_WH_F_QUERY', fetchAMFWHF, setAMFWHF),
    [AMFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_AM_M_WH_M_QUERY', fetchAMMWHM, setAMMWHM),
    [AMMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_AS_F_WH_F_QUERY', fetchASFWHF, setASFWHF),
    [ASFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_AS_M_WH_M_QUERY', fetchASMWHM, setASMWHM),
    [ASMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_BL_F_WH_F_QUERY', fetchBLFWHF, setBLFWHF),
    [BLFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_BL_M_WH_M_QUERY', fetchBLMWHM, setBLMWHM),
    [BLMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_HI_F_WH_F_QUERY', fetchHIFWHF, setHIFWHF),
    [HIFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_HI_M_WH_M_QUERY', fetchHIMWHM, setHIMWHM),
    [HIMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_HP_F_WH_F_QUERY', fetchHPFWHF, setHPFWHF),
    [HPFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_HP_M_WH_M_QUERY', fetchHPMWHM, setHPMWHM),
    [HPMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_TR_F_WH_F_QUERY', fetchTRFWHF, setTRFWHF),
    [TRFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_TR_M_WH_M_QUERY', fetchTRMWHM, setTRMWHM),
    [TRMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_TR_F_WH_F_QUERY', fetchTRFWHF, setTRFWHF),
    [TRFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_TR_M_WH_M_QUERY', fetchTRMWHM, setTRMWHM),
    [TRMWHM],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_WH_F_WH_F_QUERY', fetchWHFWHF, setWHFWHF),
    [WHFWHF],
  );
  React.useState(
    async () =>
      await getGraphData('SCHOOLS_WH_M_WH_M_QUERY', fetchWHMWHM, setWHMWHM),
    [WHMWHM],
  );
  return (
    <div>
      <AsyncSelectInput setSelectedSchool={setSelectedSchool} />
      <div
        className="radio-container"
        onChange={(event) => setComparison(event.target.value)}
      >
        <div className="radio">
          <input type="radio" value="pop" name="comparison" defaultChecked />{' '}
          Rest of Population
        </div>
        <div className="radio">
          <input type="radio" value="wh" name="comparison" /> White Population
        </div>
      </div>
      {selectedSchool ? (
        <SchoolRiskRatiosTable school={selectedSchool} />
      ) : null}
      {selectedSchool ? (
        <HistogramGrid
          AMF={AMF}
          AMFWHF={AMFWHF}
          AMM={AMM}
          AMMWHM={AMMWHM}
          ASF={ASF}
          ASFWHF={ASFWHF}
          ASM={ASM}
          ASMWHM={ASMWHM}
          BLF={BLF}
          BLFWHF={BLFWHF}
          BLM={BLM}
          BLMWHM={BLMWHM}
          HIF={HIF}
          HIFWHF={HIFWHF}
          HIM={HIM}
          HIMWHM={HIMWHM}
          HPF={HPF}
          HPFWHF={HPFWHF}
          HPM={HPM}
          HPMWHM={HPMWHM}
          TRF={TRF}
          TRFWHF={TRFWHF}
          TRM={TRM}
          TRMWHM={TRMWHM}
          WHF={WHF}
          WHFWHF={WHFWHF}
          WHM={WHM}
          WHMWHM={WHMWHM}
          school={selectedSchool}
          comparison={comparison}
        />
      ) : null}
    </div>
  );
};

export default Search;
