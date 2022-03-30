import * as React from 'react';
import styled from 'styled-components';
import Citations from '../Citations';
import OrderedList from '../OrderedList';
import HyperLink from '../HyperLink';
import Title from '../Title';
import Spacer from '../Spacer';

const WhatNow = () => (
  <Wrapper>
    <Title level={2} id="what-now">
      What Now?
    </Title>
    <Spacer size={12} />
    <OrderedList>
      <OrderedList.Item>
        <HyperLink href="https://docs.google.com/document/d/1KxDbYr8IV30PubICWSEtScYrlYi8dDyKJew3DUAXWDo/edit?usp=sharing">
          Use the linked guide to take preliminary notes on your local patterns
          of disproportionality and make a plan for moving forward.
        </HyperLink>
      </OrderedList.Item>
      <OrderedList.Item>
        Explore possible interventions for your patterns of disproportionality.
        Please note that your findings for different subgroups might require
        different actions.
      </OrderedList.Item>
    </OrderedList>
    <Spacer size={10} />
    <Resources>
      <Title level={3}>Additional Resources</Title>
      <Spacer size={8} />
      <ResourcesContent>
        <Citations>
          <Citations.Item>
            <Citations.Citation>
              Munk, T., O'Hara, N., and Sulzberger, L. (2019). Examining
              Representation and Identification: Over, Under, or Both?. (Version
              2.0). IDEA Data Center. Rockville, MD: Westat.{' '}
              <HyperLink href="https://ideadata.org/resources/resource/1592/examining-representation-and-identification-over-under-or-both" />
            </Citations.Citation>
          </Citations.Item>
          <Citations.Item>
            <Citations.Citation>
              Fergus, E. (2016). Solving Disproportionality and Achieving
              Equity: A Leader's Guide to Using Data to Change Hearts and Minds.
              Corwin Press.
            </Citations.Citation>
          </Citations.Item>
        </Citations>
      </ResourcesContent>
    </Resources>
  </Wrapper>
);

const Wrapper = styled.section``;
const Resources = styled.div``;
const ResourcesContent = styled.div``;

export default WhatNow;
