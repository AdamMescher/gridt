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
    >
      <StyledModalContent>
        <h2>GRID-T DISCLOSURE</h2>
        <YouTubeEmbed id={'lBO23HSRMAg'} />
        <p>
          I'm baby mustache meh kinfolk, four loko ennui tumblr bespoke cloud
          bread skateboard prism glossier retro crucifix squid. You probably
          haven't heard of them distillery banjo yuccie. Lomo four loko artisan
          affogato. Chillwave church-key ugh, hell of butcher sartorial
          slow-carb. Four dollar toast hexagon fashion axe gentrify poutine
          bitters. PBR&B iceland edison bulb butcher post-ironic 90's,
          asymmetrical freegan kale chips normcore microdosing portland +1
          prism. Put a bird on it pabst ethical, subway tile enamel pin 3 wolf
          moon plaid four dollar toast fingerstache.
        </p>
        <p>
          Office for Civil Rights. (2020). Civil Rights Data Collection (CRDC)
          for the 2017-18 School Year [Dataset]. Washington DC: Office for Civil
          Rights.
          https://www2.ed.gov/about/offices/list/ocr/docs/crdc-2017-18.html
        </p>
        <button onClick={closeDisclosureModal}>I Understand</button>
      </StyledModalContent>
    </Modal>
  );
};

Modal.setAppElement('#root');

export default DisclosureModal;
