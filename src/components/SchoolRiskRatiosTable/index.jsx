import * as React from 'react';
import Table from '../Table';

const SchoolRiskRatiosTable = ({ school }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'gender',
      },
      {
        Header: 'American Indian / Alaskan Native',
        accessor: 'am',
      },
      {
        Header: 'Asian',
        accessor: 'as',
      },
      {
        Header: 'Black',
        accessor: 'bl',
      },
      {
        Header: 'Hispanic',
        accessor: 'hi',
      },
      {
        Header: 'Pacific Islander',
        accessor: 'hp',
      },
      {
        Header: 'Two or More Races',
        accessor: 'tr',
      },
      {
        Header: 'White',
        accessor: 'wh',
      },
    ],
    [],
  );
  const data = React.useMemo(
    () => [
      {
        gender: 'Female - Comparison to Rest of Population',
        am: school.RR_AM_F_POP || 'N/A',
        as: school.RR_AS_F_POP || 'N/A',
        bl: school.RR_BL_F_POP || 'N/A',
        hi: school.RR_HI_F_POP || 'N/A',
        hp: school.RR_HP_F_POP || 'N/A',
        tr: school.RR_TR_F_POP || 'N/A',
        wh: school.RR_WH_F_POP || 'N/A',
      },
      {
        gender: 'Female - Comparison to White Population',
        am: school.RR_AM_F_WH_F || 'N/A',
        as: school.RR_AS_F_WH_F || 'N/A',
        bl: school.RR_BL_F_WH_F || 'N/A',
        hi: school.RR_HI_F_WH_F || 'N/A',
        hp: school.RR_HP_F_WH_F || 'N/A',
        tr: school.RR_TR_F_WH_F || 'N/A',
        wh: school.RR_WH_F_WH_F || 'N/A',
      },
      {
        gender: 'Male - Comparison to Rest Population',
        am: school.RR_AM_M_POP || 'N/A',
        as: school.RR_AS_M_POP || 'N/A',
        bl: school.RR_BL_M_POP || 'N/A',
        hi: school.RR_HI_M_POP || 'N/A',
        hp: school.RR_HP_M_POP || 'N/A',
        tr: school.RR_TR_M_POP || 'N/A',
        wh: school.RR_WH_M_POP || 'N/A',
      },
      {
        gender: 'Male - Comparison to White Population',
        am: school.RR_AM_M_WH_M || 'N/A',
        as: school.RR_AS_M_WH_M || 'N/A',
        bl: school.RR_BL_M_WH_M || 'N/A',
        hi: school.RR_HI_M_WH_M || 'N/A',
        hp: school.RR_HP_M_WH_M || 'N/A',
        tr: school.RR_TR_M_WH_M || 'N/A',
        wh: school.RR_WH_M_WH_M || 'N/A',
      },
    ],
    [school],
  );
  return <Table data={data} columns={columns} />;
};

export default SchoolRiskRatiosTable;
