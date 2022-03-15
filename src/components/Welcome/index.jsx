import * as React from 'react';
import styled from 'styled-components';
import StyledWelcome from './styled';
import RiskRatioDescription from '../RiskRatioDescription';
import RiskRatioKey from '../RiskRatioKey';
import Highlight from '../Highlight';
import Title from '../Title';
import UnorderedList from '../UnorderedList';
import Button from '../Button';
import OrderedList from '../OrderedList';
import HyperLink from '../HyperLink';

const Welcome = ({ openDisclosureModal }) => {
  return (
    <StyledWelcome className="welcome-container">
      <Title.H2>Welcome</Title.H2>
      <Button onClick={openDisclosureModal}>
        Show Welcome to GRID-T Resources
      </Button>
      <Title.H3>Important Definitions</Title.H3>
      <UnorderedList>
        <UnorderedList.Item>
          <Highlight text="Risk Ratio" color="emerald" />: A single number
          summary that describes the probability that a subgroup is placed in
          special education compared to the probability that the rest of the
          group is in special education (Cruz & Rodl, 2018).
        </UnorderedList.Item>
        <UnorderedList.Item>
          <Highlight text="Outcome" color="orange" />: Placement of students in
          special education.
        </UnorderedList.Item>
        <UnorderedList.Item>
          <Highlight text="Underrepresentation" color="sky" />: the target group
          is <Italic>less</Italic> likely to be placed in special education.
        </UnorderedList.Item>
        <UnorderedList.Item>
          <Highlight text="Overrepresentation" color="fuchsia" />: the target
          group is <Italic>more</Italic> likely to be placed in special
          education.
        </UnorderedList.Item>
      </UnorderedList>
      <Title.H3>How to use GRID-T</Title.H3>
      <OrderedList>
        <OrderedList.Item>
          Select Race, Gender, and Disability Category or Total Special
          Education population.
        </OrderedList.Item>
        <OrderedList.Item>
          A histogram will appear that represents the frequency of each{' '}
          <Highlight text="Risk Ratio" color="emerald" /> across the United
          States. This gives a national perspective as to whether this subgroup
          is either overrepresented, underrepresented, or proportionate.
        </OrderedList.Item>
        <OrderedList.Item>
          Examine the descriptive statistics table to see n (how many schools
          are involved in the calculation), IQR (interquartile ranges), Mean
          (average <Highlight text="Risk Ratio" color="emerald" /> for that
          subgroup intersection), and Mode (most common{' '}
          <Highlight text="Risk Ratio" color="emerald" /> for that subgroup
          intersection).
        </OrderedList.Item>
        <OrderedList.Item>
          Type your school’s name into the search box to see if the data is
          present for that subgroup.
        </OrderedList.Item>
        <OrderedList.Item>
          If the data is present and there are more than three students
          represented in that subgroup, a color-coded line will appear with your
          school's <Highlight text="Risk Ratio" color="emerald" />. The color
          signifies how underrepresented, overrepresented, or proportionate your
          school's subgroup is in the selected dis/ability category or Total
          special Education population.
        </OrderedList.Item>
        <OrderedList.Item>
          Read the{' '}
          <Italic>
            <HyperLink href="/#what-now" text={'What Now'} />
          </Italic>{' '}
          section to look through resources that will help you to address your
          local area's patterns of disproportionality.
        </OrderedList.Item>
      </OrderedList>
      <Title.H3>Interpretation Resources</Title.H3>
      <div className="tables">
        <RiskRatioDescription />
        <RiskRatioKey />
      </div>
    </StyledWelcome>
  );
};

const Italic = styled.span`
  font-style: italic;
`;

export default Welcome;
