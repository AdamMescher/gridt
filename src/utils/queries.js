import schoolQueries from './queries/schoolQueries';
import autismQueries from './queries/autismQueries';
import developmentalDelayQueries from './queries/developmentalDelayQueries';
import deafBlindnessQueries from './queries/deafBlindnessQueries';
import hearingImpairmentQueries from './queries/hearingImpairmentQueries';
import intellectualDisabilityQueries from './queries/intellectualDisabilityQueries';
import multipleDisabilityQueries from './queries/multipleDisabilityQueries';
import orthopedicImpairmentQueries from './queries/orthopedicImpairmentQueries';
import otherHealthImpairmentQueries from './queries/otherHealthImpairmentQueries';
import specificLearningDisabilityQueries from './queries/specificLearningDisabilityQueries';
import speechOrLanguageImpairmentQueries from './queries/speechOrLanguageImpairmentQueries';
import emotionalDisturbanceQueries from './queries/emotionalDisturbanceQueries';
import traumaticBrainInjuryQueries from './queries/traumaticBrainInjuryQueries';
import visualImpairmentQueries from './queries/visualImpairmentQueries';

const queries = {
  ...schoolQueries,
  ...autismQueries,
  ...developmentalDelayQueries,
  ...deafBlindnessQueries,
  ...hearingImpairmentQueries,
  ...intellectualDisabilityQueries,
  ...multipleDisabilityQueries,
  ...orthopedicImpairmentQueries,
  ...otherHealthImpairmentQueries,
  ...specificLearningDisabilityQueries,
  ...speechOrLanguageImpairmentQueries,
  ...emotionalDisturbanceQueries,
  ...traumaticBrainInjuryQueries,
  ...visualImpairmentQueries,
};

export default queries;
