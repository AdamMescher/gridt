import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import '@testing-library/jest-dom';
import { ApolloProvider } from '@apollo/client';
import AsyncSelectInput from './index';
import { client } from '../../ApolloClient';

describe('AsyncSelectInput Component', () => {
  const setSelectedSchool = jest.fn((value) => value);
  it('should render without errors', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput />
      </ApolloProvider>,
    );
  });
  it('should not render a label if neither name or label prop are provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput />
      </ApolloProvider>,
    );
    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });
  it('should not render a label if only name prop is provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput name="frank" />
      </ApolloProvider>,
    );
    expect(screen.queryByText('frank')).not.toBeInTheDocument();
  });
  it('should render a label if only the label prop is provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput labelText="Island Records" />
      </ApolloProvider>,
    );
    expect(screen.queryByText('Island Records')).toBeInTheDocument();
  });
  it('should render a label if name and label props are provided', () => {
    render(
      <ApolloProvider client={client}>
        <AsyncSelectInput labelText="Red Hill Records" name="red-hill" />
      </ApolloProvider>,
    );
    expect(screen.queryByText('Red Hill Records')).toBeInTheDocument();
  });
  it('should query for all schools if no disability is selected', async () => {
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <form data-testid="form" htmlFor="school">
          <AsyncSelectInput
            labelText="school"
            name="school"
            setSelectedSchool={setSelectedSchool}
            disability={''}
          />
        </form>
      </ApolloProvider>,
    );
    expect(queryByTestId('form')).toHaveFormValues({ school: '' });
    fireEvent.change(queryByLabelText('school'), { target: { value: 'west' } });
    await selectEvent.select(
      queryByLabelText('school'),
      'West Madison Elementary School',
    );
    expect(queryByTestId('form')).toHaveFormValues({
      school: '10000800851',
    });
  });
  it('should query for autism data if autism option is selected', async () => {
    const disability = { value: 'AUT', label: 'Autism' };
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <form data-testid="form" htmlFor="school">
          <AsyncSelectInput
            labelText="school"
            name="school"
            disability={disability}
            setSelectedSchool={setSelectedSchool}
          />
        </form>
      </ApolloProvider>,
    );
    expect(queryByTestId('form')).toHaveFormValues({ school: '' });
    fireEvent.change(queryByLabelText('school'), {
      target: { value: 'north' },
    });
    await selectEvent.select(queryByLabelText('school'), 'ALVARADO EL-NORTH');
    expect(queryByTestId('form')).toHaveFormValues({
      school: '480001106201',
    });
  });
  it('should query for deaf blindness data if deaf blindness disability option is selected', async () => {
    const disability = { value: 'DB', label: 'Deaf-Blindness' };
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <form data-testid="form" htmlFor="school">
          <AsyncSelectInput
            labelText="school"
            name="school"
            disability={disability}
            setSelectedSchool={setSelectedSchool}
          />
        </form>
      </ApolloProvider>,
    );
    expect(queryByTestId('form')).toHaveFormValues({ school: '' });
    fireEvent.change(queryByLabelText('school'), {
      target: { value: 'south' },
    });
    await selectEvent.select(
      queryByLabelText('school'),
      'Bloomington High School South',
    );
    expect(queryByTestId('form')).toHaveFormValues({
      school: '180063000120',
    });
  });
  it('should query for developmental delay data if developmental delay disability option is selected', async () => {
    const disability = { value: 'DD', label: 'Developmental Delay' };
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <form data-testid="form" htmlFor="school">
          <AsyncSelectInput
            labelText="school"
            name="school"
            disability={disability}
            setSelectedSchool={setSelectedSchool}
          />
        </form>
      </ApolloProvider>,
    );
    expect(queryByTestId('form')).toHaveFormValues({ school: '' });
    fireEvent.change(queryByLabelText('school'), {
      target: { value: 'east' },
    });
    await selectEvent.select(queryByLabelText('school'), 'ANADARKO EAST ES');
    expect(queryByTestId('form')).toHaveFormValues({
      school: '400300000051',
    });
  });
  it('should query for emotional disturbance data if emotional disturbance disability option is selected', async () => {
    const disability = { value: 'EMN', label: 'Emotional Disturbance' };
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <form data-testid="form" htmlFor="school">
          <AsyncSelectInput
            labelText="school"
            name="school"
            disability={disability}
            setSelectedSchool={setSelectedSchool}
          />
        </form>
      </ApolloProvider>,
    );
    expect(queryByTestId('form')).toHaveFormValues({ school: '' });
    fireEvent.change(queryByLabelText('school'), {
      target: { value: 'mount' },
    });
    await selectEvent.select(
      queryByLabelText('school'),
      'Adobe Mountain School',
    );
    expect(queryByTestId('form')).toHaveFormValues({
      school: '040973401517',
    });
  });
  it('should query for hearing impairment data if hearing impariment disability option is selected', async () => {
    const disability = { value: 'HI', label: 'Hearing Impairment' };
    const { queryByTestId, queryByLabelText } = render(
      <ApolloProvider client={client}>
        <form data-testid="form" htmlFor="school">
          <AsyncSelectInput
            labelText="school"
            name="school"
            disability={disability}
            setSelectedSchool={setSelectedSchool}
          />
        </form>
      </ApolloProvider>,
    );
    expect(queryByTestId('form')).toHaveFormValues({ school: '' });
    fireEvent.change(queryByLabelText('school'), {
      target: { value: 'bloomfield' },
    });
    await selectEvent.select(
      queryByLabelText('school'),
      'Alliance Margaret M. Bloomfield Technology Academy High',
    );
    expect(queryByTestId('form')).toHaveFormValues({
      school: '062271012924',
    });
  });
});
