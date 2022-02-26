import * as React from 'react';
import StyledWhatNow from './styled';
import HyperLink from '../HyperLink';

const WhatNow = () => {
  return (
    <StyledWhatNow>
      <h2 className="title">What Now?</h2>
      <ol>
        <li>
          <HyperLink
            href="https://docs.google.com/document/d/1KxDbYr8IV30PubICWSEtScYrlYi8dDyKJew3DUAXWDo/edit?usp=sharing"
            text="Use the linked guide to take preliminary notes on your local
            patterns of disproportionality and make a plan for moving forward."
          />
        </li>
        <li>
          Explore possible interventions for your patterns of
          disproportionality. Please note that your findings for different
          subgroups might require different actions.
        </li>
      </ol>
      <div>
        <h3 className="subtitle">Additional Resources</h3>
        <p className="citation">
          Munk, T., O'Hara, N., and Sulzberger, L. (2019). Examining
          representation and identification: Over, under, or both?. (Version
          2.0). IDEA Data Center. Rockville, MD: Westat.{' '}
          <HyperLink
            href="https://ideadata.org/resources/resource/1592/examining-representation-and-identification-over-under-or-both"
            text="https://ideadata.org/resources/resource/1592/examining-representation-and-identification-over-under-or-both"
          />
        </p>
        <p className="citation">
          Fergus, E. (2016). Solving disproportionality and achieving equity: A
          leader's guide to using data to change hearts and minds. Corwin Press.
        </p>
      </div>
    </StyledWhatNow>
  );
};

export default WhatNow;
