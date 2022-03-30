import * as React from 'react';
import styled from 'styled-components';
import RiskRatioDescription from '../RiskRatioDescription';
import RiskRatioKey from '../RiskRatioKey';
import Highlight from '../Highlight';
import Title from '../Title';
import UnorderedList from '../UnorderedList';
import Button from '../Button';
import OrderedList from '../OrderedList';
import HyperLink from '../HyperLink';
import Spacer from '../Spacer';

const Welcome = ({ openDisclosureModal }) => {
  return (
    <Wrapper>
      <Title level={2}>Welcome</Title>
      <Spacer size={12} />
      <Button onClick={openDisclosureModal}>
        Show Welcome to GRID-T Resources
      </Button>
      <Spacer size={10} />
      <Title level={3}>Important Definitions</Title>
      <Spacer size={8} />
      <UnorderedList>
        <UnorderedList.Item>
          <Highlight color="emerald">Risk Ratio</Highlight>: A single number
          summary that describes the probability that a subgroup is placed in
          special education compared to the probability that the rest of the
          group is in special education (Cruz & Rodl, 2018).
        </UnorderedList.Item>
        <UnorderedList.Item>
          <Highlight color="orange">Outcome</Highlight>: Placement of students
          in special education.
        </UnorderedList.Item>
        <UnorderedList.Item>
          <Highlight color="sky">Underrepresentation</Highlight>: the target
          group is <Italic>less</Italic> likely to be placed in special
          education.
        </UnorderedList.Item>
        <UnorderedList.Item>
          <Highlight color="fuchsia">Overrepresentation</Highlight>: the target
          group is <Italic>more</Italic> likely to be placed in special
          education.
        </UnorderedList.Item>
      </UnorderedList>
      <Spacer size={10} />
      <Title level={3}>How to Use GRID-T</Title>
      <Spacer size={8} />
      <OrderedList>
        <OrderedList.Item>
          Select Race, Gender, and Disability Category or Total Special
          Education population.
        </OrderedList.Item>
        <OrderedList.Item>
          A histogram will appear that represents the frequency of each{' '}
          <Highlight color="emerald">Risk Ratio</Highlight> across the United
          States. This gives a national perspective as to whether this subgroup
          is either overrepresented, underrepresented, or proportionate.
        </OrderedList.Item>
        <OrderedList.Item>
          Examine the descriptive statistics table to see n (how many schools
          are involved in the calculation), IQR (interquartile ranges), Mean
          (average <Highlight color="emerald">Risk Ratio</Highlight> for that
          subgroup intersection), and Mode (most common{' '}
          <Highlight color="emerald">Risk Ratio</Highlight> for that subgroup
          intersection).
        </OrderedList.Item>
        <OrderedList.Item>
          Type your school’s name into the search box to see if the data is
          present for that subgroup.
        </OrderedList.Item>
        <OrderedList.Item>
          If the data is present and there are more than three students
          represented in that subgroup, a color-coded line will appear with your
          school's <Highlight color="emerald">Risk Ratio</Highlight>. The color
          signifies how underrepresented, overrepresented, or proportionate your
          school's subgroup is in the selected dis/ability category or Total
          special Education population.
        </OrderedList.Item>
        <OrderedList.Item>
          Read the <HyperLink href="/#what-now">What Now?</HyperLink> section to
          look through resources that will help you to address your local area's
          patterns of disproportionality.
        </OrderedList.Item>
      </OrderedList>
      <Spacer size={10} />
      <Title level={3}>Interpretation Resources</Title>
      <Spacer size={8} />
      <div className="tables">
        <RiskRatioDescription />
        <Spacer size={10} />
        <RiskRatioKey />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
const Italic = styled.span`
  font-style: italic;
`;

export default Welcome;
