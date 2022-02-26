import * as React from 'react';
import StyledWelcome from './styled';
import RiskRatioDescription from '../RiskRatioDescription';
import RiskRatioKey from '../RiskRatioKey';
import Highlight from '../Highlight';

const Welcome = ({ openDisclosureModal }) => {
  return (
    <StyledWelcome className="welcome-container">
      <h2 className="title">Welcome</h2>
      <button className="button" onClick={openDisclosureModal}>
        Show Welcome to GRID-T Resources
      </button>
      <h3 className="subtitle">Important Definitions</h3>
      <ul className="definitions">
        <li>
          <p>
            <Highlight text="Risk Ratio" color="emerald" />: A single number
            summary that describes the probability that a subgroup is placed in
            special education compared to the probability that the rest of the
            group is in special education (Cruz & Rodl, 2018)
          </p>
        </li>
        <li>
          <p>
            <Highlight text="Outcome" color="orange" />: Placement of students
            in special education
          </p>
        </li>
        <li>
          <p>
            <Highlight text="Underrepresentation" color="sky" />: the target
            group is <em>less</em> likely to be placed in special education.
          </p>
        </li>
        <li>
          <p>
            <Highlight text="Overrepresentation" color="fuchsia" />: the target
            group is <em>more</em> likely to be placed in special education.
          </p>
        </li>
      </ul>
      <h3 className="subtitle">How to use GRID-T</h3>
      <ol className="steps">
        <li>
          Select Race, Gender, and Disability Category or Total Special
          Education population
        </li>
        <li>
          A histogram will appear that represents the frequency of each{' '}
          <Highlight text="Risk Ratio" color="emerald" /> across the United
          States. This gives a national perspective as to whether this subgroup
          is either overrepresented, underrepresented, or proportionate.
        </li>
        <li>
          Examine the descriptive statistics table to see n (how many schools
          are involved in the calculation), IQR (interquartile ranges), Mean
          (average <Highlight text="Risk Ratio" color="emerald" /> for that
          subgroup intersection), and Mode (most common{' '}
          <Highlight text="Risk Ratio" color="emerald" /> for that subgroup
          intersection)
        </li>
        <li>
          Type your school’s name into the search box to see if the data is
          present for that subgroup.
        </li>
        <li>
          If the data is present and there are more than three students
          represented in that subgroup, a color-coded line will appear with your
          school's <Highlight text="Risk Ratio" color="emerald" />. The color
          signifies how underrepresented, overrepresented, or proportionate your
          school's subgroup is in the selected dis/ability category or Total
          special Education population.
        </li>
        <li>
          Read the “What Now?” section to look through resources that will help
          you to address your local area's patterns of disproportionality.
        </li>
      </ol>
      <h3 className="subtitle">Interpretation Resources</h3>
      <div className="tables">
        <RiskRatioDescription />
        <RiskRatioKey />
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
