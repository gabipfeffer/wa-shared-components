import React from 'react';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { isEmpty } from 'ramda';

import styles from './Modal.pcss';

export default function Modal({ children, title, content, customWidth }) {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      className={styles.modal}
      overlayClassName={styles.overlay}
      style={isEmpty(customWidth) ? '' : { content: { width: `${customWidth}px` } }}>
      <button className={styles['modal-close']} onClick={hideModal}>
        X
      </button>
      <h1 className={styles['modal-title']}>{title}</h1>
      <div className={styles['modal-content']}>{content}</div>
    </ReactModal>
  ));

  return <div onClick={showModal}>{children}</div>;
}
