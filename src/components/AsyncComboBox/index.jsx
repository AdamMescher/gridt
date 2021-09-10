import * as React from 'react';
import { Item } from '@react-stately/collections';
import {useAsyncList} from '@react-stately/data';
import ComboBox from '../ComboBox';


const AsyncComboBox = () => {
  let list = useAsyncList({
    async load({signal}) {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon', {signal});
      const json = await res.json();
      return {items: json.results};
    }
  })


    <ComboBox
    label="Pick a Pokemon" items={list.items} isLoading={list.isLoading}>
    >
      {(school) => <Item key={school.SCH_NAME}>{school.SCH_NAME}</Item>}
    </ComboBox>
  );
};

export default AsyncComboBox;
