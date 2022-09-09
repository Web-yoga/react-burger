import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from './modal.module.css';

const modalRoot = document.getElementById('app-modal');

function Modal({children, header, isOpen, onClose}){
	return (
		isOpen && createPortal(
			<div className={styles.root}>
				<div className={styles.modal}>
					<section className={styles.header}>
						<span className="text text_type_main-large">{ header }</span>
						<div className={styles.close} onClick={onClose}>
							<CloseIcon type="primary" />
						</div>
					</section>
					{children}
				</div>
				<ModalOverlay onClose={onClose}/>
			</div>
			,
			modalRoot
		)
	)
}

export default Modal