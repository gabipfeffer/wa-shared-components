import React from 'react';
import ReactModal from 'react-modal';
import { isEmpty } from 'ramda';

import s from './OpenModal.pcss';

function OpenModal({ title, children, customWidth, hideModal, isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={s.modal}
      overlayClassName={s.overlay}
      style={isEmpty(customWidth) ? '' : { content: { width: `${customWidth}px` } }}>
      <button className={s['modal-close']} onClick={hideModal}>X</button>
      <h1 className={s['modal-title']}>{title}</h1>
      <div className={s['modal-content']}>{children}</div>
    </ReactModal>
  );
}

OpenModal.defaultProps = {
  isOpen: true,
};

export default OpenModal;
