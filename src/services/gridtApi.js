import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gridtApi = createApi({
  reducerPath: 'genderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/api/v1',
  }),
  endpoints: (builder) => ({
    getAllGenders: builder.query({
      query: () => '/genders',
    }),
    getOneGenderById: builder.query({
      query: (id) => `/genders/${id}`,
    }),
    getAllRaces: builder.query({
      query: () => '/races',
    }),
    getOneRaceById: builder.query({
      query: (id) => `/races/${id}`,
    }),
    getAllDisabilities: builder.query({
      query: () => '/disabilities',
    }),
    getOneDisabilityById: builder.query({
      query: (id) => `/disabilities/${id}`,
    }),
    getAllStates: builder.query({
      query: () => '/states',
    }),
    getOneStateById: builder.query({
      query: (id) => `/states/${id}`,
    }),
    getAllDistricts: builder.query({
      query: () => '/districts',
    }),
    getOneDistrictById: builder.query({
      query: (id) => `/districts/${id}`,
    }),
    getSchoolsWithLimit: builder.query({
      query: () => `/schools`,
    }),
    getOneSchoolById: builder.query({
      query: (id) => `/schools/${id}`,
    }),
    getSchoolsByName: builder.query({
      query: (name) => `/schools?name=${name}`,
    }),
  }),
});

export const {
  useGetAllGendersQuery,
  useGetOneGenderByIdQueryuseGetAllGendersQuery,
  useGetAllRacesQueryuseGetAllGendersQuery,
  useGetOneRaceByIdQueryuseGetAllGendersQuery,
  useGetAllDisabilitiesQueryuseGetAllGendersQuery,
  useGetOneDisabilityByIdQueryuseGetAllGendersQuery,
  useGetAllStatesQueryuseGetAllGendersQuery,
  useGetOneStateByIdQueryuseGetAllGendersQuery,
  useGetAllDistrictsQueryuseGetAllGendersQuery,
  useGetOneDistrictByIdQueryuseGetAllGendersQuery,
  useGetSchoolsWithLimitQueryuseGetAllGendersQuery,
  useGetOneSchoolByIdQueryuseGetAllGendersQuery,
  useGetSchoolsByNameQueryuseGetAllGendersQuery,
} = gridtApi;
