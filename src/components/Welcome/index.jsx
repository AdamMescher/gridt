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
      <Spacer size={10} />
      <Title level={3}>How to use GRID-T</Title>
      <Spacer size={8} />
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
          Read the <HyperLink href="/#what-now" text={'What Now?'} /> section to
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
