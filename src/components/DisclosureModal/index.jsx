import * as React from 'react';
import Modal from 'react-modal';
import YouTubeEmbed from '../YouTubeEmbed';
import StyledModalContent from './styled';

const DisclosureModal = ({
  modalIsOpen,
  openDisclosureModal,
  closeDisclosureModal,
}) => {
  return (
    <Modal
      parentSelector={() => document.querySelector('#root')}
      isOpen={modalIsOpen}
      style={{ content: { inset: 40, padding: 0 } }}
    >
      <StyledModalContent>
        <p>
          It is important for practitioners to use this data wisely to inform
          their schools intervention plans. A working knowledge of risk ratios
          and histograms is required for the use of this website. Please utilize
          the video above and other attached resources below to familiarize
          yourself with these elements of statistics before accessing the data
          on these graphs.
        </p>
        <h4>References</h4>
        <p className="citation">
          Bollmer, J., Bethel, J., Garrison-Mogren, R., & Brauen, M. (2007).
          Using the risk ratio to assess racial/ethnic disproportionality in
          special education at the school-district level.{' '}
          <em>The Journal of Special Education</em>, 41(3), 186–198.
        </p>
        <p className="citation">
          Cruz, R. A., & Rodl, J. E. (2018). An integrative synthesis of
          literature on disproportionality in special education.{' '}
          <em>The Journal of Special Education</em>, 52(1), 50–63.
        </p>
        <p className="citation">
          Office for Civil Rights. (2020). Civil Rights Data Collection (CRDC)
          for the 2017-18 School Year [Dataset]. Washington DC: Office for Civil
          Rights.{' '}
          <a href="https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html">
            https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html
          </a>
        </p>
        <p className="citation">
          Office for Civil Rights. (2020). Civil Rights Data Collection (CRDC)
          for the 2017-18 School Year [Spreadsheet]. Washington DC: Office for
          Civil Rights.{' '}
          <a href="https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html">
            https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html
          </a>
        </p>
        <YouTubeEmbed id={'lBO23HSRMAg'} />
        <button onClick={closeDisclosureModal}>I Understand and Agree</button>
        <button onClick={closeDisclosureModal} className="topright">
          X
        </button>
      </StyledModalContent>
    </Modal>
  );
};

Modal.setAppElement('#root');

export default DisclosureModal;
