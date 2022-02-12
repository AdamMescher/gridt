import schoolsByNameAsyncSelectQueries from './schoolsByNameAsyncSelectQueries';
import autismByNameAsyncSelectQueries from './autismByNameAsyncSelectQueries';
import deafBlindnessesAsyncSelectQueries from './deafBlindnessesAsyncSelectQueries';
import developmentalDelaysAsyncSelectQueries from './developmentalDelaysAsyncSelectQueries';
import hearingImpairmentsAsyncSelectQueries from './hearingImpairmentsAsyncSelectQueries';
import emotionalDisturbancesAsyncSelectQueries from './emotionalDisturbancesAsyncSelectQueries';
import multipleDisabilitiesAsyncSelectQueries from './multipleDisabilitiesAsyncSelectQueries';
import intellectualDisabilitiesAsyncSelectQueries from './intellectualDisabilitiesAsyncSelectQueries';
import orthopedicImpairmentsAsyncSelectQueries from './orthopedicImpairmentsAsyncSelectQueries';
import otherHealthImpairmentsAsyncSelectQueries from './otherHealthImpairmentsAsyncSelectQueries';
import specificLearningDisablitiesAsyncSelectQueries from './specificLearningDisablitiesAsyncSelectQueries';
import speechOrLanguageImpairmentsAsyncSelectQueries from './speechOrLanguageImpairmentsAsyncSelectQueries';
import traumaticBrainInjuriesAsyncSelectQueries from './traumaticBrainInjuriesAsyncSelectQueries';
import visualImpairmentAsyncSelectQueries from './visualImpairmentAsyncSelectQueries';

const asyncSelectQueries = {
  ...schoolsByNameAsyncSelectQueries,
  ...autismByNameAsyncSelectQueries,
  ...deafBlindnessesAsyncSelectQueries,
  ...developmentalDelaysAsyncSelectQueries,
  ...hearingImpairmentsAsyncSelectQueries,
  ...emotionalDisturbancesAsyncSelectQueries,
  ...multipleDisabilitiesAsyncSelectQueries,
  ...intellectualDisabilitiesAsyncSelectQueries,
  ...orthopedicImpairmentsAsyncSelectQueries,
  ...otherHealthImpairmentsAsyncSelectQueries,
  ...specificLearningDisablitiesAsyncSelectQueries,
  ...speechOrLanguageImpairmentsAsyncSelectQueries,
  ...traumaticBrainInjuriesAsyncSelectQueries,
  ...visualImpairmentAsyncSelectQueries,
};

export default asyncSelectQueries;
