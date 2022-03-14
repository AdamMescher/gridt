import * as React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import YouTubeEmbed from '../YouTubeEmbed';
import HyperLink from '../HyperLink';
import Button from '../Button';

const DisclosureModal = ({ modalIsOpen, closeDisclosureModal }) => {
  return (
    <Modal
      parentSelector={() => document.querySelector('#root')}
      isOpen={modalIsOpen}
    >
      <ModalContentWrapper>
        <ModalCloseButton onClick={closeDisclosureModal}>X</ModalCloseButton>
        <ModalTitle>
          Welcome to Gender and Race Intersectional Disproportionality-Tool
        </ModalTitle>
        <ModalCopy>
          It is important for practitioners to use this data wisely to inform
          their schools intervention plans. A working knowledge of risk ratios
          and histograms is required for the use of this website. Please utilize
          the video and other attached resources below to familiarize yourself
          with these elements of statistics before accessing the data on these
          graphs.
        </ModalCopy>
        <ModalSubtitle>References</ModalSubtitle>
        <CitationList>
          <CitatioListItem>
            <Citation>
              Bollmer, J., Bethel, J., Garrison-Mogren, R., & Brauen, M. (2007).
              Using the risk ratio to assess racial/ethnic disproportionality in
              special education at the school-district level.{' '}
              <SourceTitle>The Journal of Special Education</SourceTitle>,
              41(3), 186–198.
            </Citation>
          </CitatioListItem>
          <CitatioListItem>
            <Citation>
              Cruz, R. A., & Rodl, J. E. (2018). An integrative synthesis of
              literature on disproportionality in special education.{' '}
              <SourceTitle>The Journal of Special Education</SourceTitle>,
              52(1), 50–63.
            </Citation>
          </CitatioListItem>
          <CitatioListItem>
            <Citation>
              Office for Civil Rights. (2020). Civil Rights Data Collection
              (CRDC) for the 2017-18 School Year [Dataset]. Washington DC:
              Office for Civil Rights.{' '}
              <HyperLink href="https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html" />
            </Citation>
          </CitatioListItem>
        </CitationList>
        <YouTubeEmbed className="video" id={'AEkaA-aZkYc'} />
        <ButtonWrapper>
          <Button onClick={closeDisclosureModal}>I Understand</Button>
        </ButtonWrapper>
      </ModalContentWrapper>
    </Modal>
  );
};

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
const ModalTitle = styled.h2`
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
const ModalCopy = styled.p`
  margin-top: 18px;
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
const ModalSubtitle = styled.h4`
  margin-top: 12px;
`;
const ModalCloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const CitationList = styled.ul`
  list-style-type: none;
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
  padding-inline-start: 0;
`;
const CitatioListItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
const Citation = styled.cite`
  font-style: normal;
`;
const SourceTitle = styled.span`
  font-style: italic;
`;
const ButtonWrapper = styled.div`
  margin-top: 12px;
`;

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export default DisclosureModal;
