/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, FC } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import config from '../../config/modalConfig';

import styles from './modal.module.css';

type TModal = {
	header: string; 
	onClose: () => void;
};

const modalRoot = document.getElementById('app-modal');

const Modal: FC<TModal> = ({children, header, onClose}) => {

	const exitByEscape = (e: KeyboardEvent): void => {
		if (e.key === config.ESC_KEY) {
			onClose();
		}
	} 

	useEffect(() => {
		document.body.addEventListener('keydown', exitByEscape, true);
		return () => {
			document.body.removeEventListener('keydown', exitByEscape, true);
		}
	}, []);

	return modalRoot
	? (
		createPortal(
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
	: null;
}

export default Modal