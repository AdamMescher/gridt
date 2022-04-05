import * as React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import YouTubeEmbed from '../YouTubeEmbed';
import HyperLink from '../HyperLink';
import Button from '../Button';
import Citations from '../Citations';
import Title from '../Title';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Spacer from '../Spacer';

const DisclosureModal = ({ modalIsOpen, closeDisclosureModal }) => (
  <Modal isOpen={modalIsOpen} data-testid={'disclosure-modal'}>
    <MaxWidthWrapper>
      <ModalContentWrapper>
        <ModalCloseButton onClick={closeDisclosureModal}>X</ModalCloseButton>
        <Title level={2} align="center">
          Welcome to Gender and Race Intersectional Disproportionality-Tool
        </Title>
        <Spacer size={12} />
        <ModalCopy>
          It is important for practitioners to use this data wisely to inform
          their schools intervention plans. A working knowledge of risk ratios
          and histograms is required for the use of this website. Please utilize
          the video and other attached resources below to familiarize yourself
          with these elements of statistics before accessing the data on these
          graphs.
        </ModalCopy>
        <Title level={3}>References</Title>
        <Spacer size={8} />
        <Citations>
          <Citations.Item>
            <Citations.Citation>
              Bollmer, J., Bethel, J., Garrison-Mogren, R., & Brauen, M. (2007).
              Using the Risk Ratio to Assess Racial/Ethnic Disproportionality in
              Special Education at the School-District Level.{' '}
              <Italic>The Journal of Special Education</Italic>,{' '}
              <Italic>41(3)</Italic>, 186–198.
            </Citations.Citation>
          </Citations.Item>
          <Citations.Item>
            Cruz, R. A., & Rodl, J. E. (2018). An Integrative Synthesis of
            Literature on Disproportionality in Special Education.{' '}
            <Italic>The Journal of Special Education</Italic>,{' '}
            <Italic>52(1)</Italic>, 50–63.
          </Citations.Item>
          <Citations.Item>
            Office for Civil Rights. (2020). Civil Rights Data Collection (CRDC)
            for the 2017-18 School Year [Dataset]. Washington DC: Office for
            Civil Rights.{' '}
            <HyperLink href="https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html" />
          </Citations.Item>
        </Citations>
        <Spacer size={24} />
        <YouTubeEmbed id={'AEkaA-aZkYc'} />
        <Spacer size={18} />
        <Button onClick={closeDisclosureModal}>I Understand</Button>
      </ModalContentWrapper>
    </MaxWidthWrapper>
  </Modal>
);

const ModalContentWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.5;
  padding: 12px;
`;

const ModalCopy = styled.p`
  margin-top: 18px;
`;
const ModalCloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const Italic = styled.span`
  font-style: italic;
`;

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
} else {
  Modal.setAppElement(document.body);
}

export default DisclosureModal;
