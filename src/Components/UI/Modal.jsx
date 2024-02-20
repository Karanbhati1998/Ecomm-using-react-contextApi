import {createPortal} from "react-dom"
import styles from './Modal.module.css'
function Modal({children,removeModel}) {

  return createPortal(
    <>
   <div className={styles.modalBackdrop} onClick={removeModel} ></div>
            <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById('newRoot')
  )
}

export default Modal