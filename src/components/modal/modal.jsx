/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';

import styles from './modal.module.css';


const modalRoot = document.getElementById('app-modal');

function Modal({children, header, onClose}){

	const exitByEscape = (e) => {
		if (e.key === "Escape") {
			onClose();
		}
	} 

	useEffect(() => {
		document.body.addEventListener('keydown', exitByEscape, true);
		return () => {
			document.body.removeEventListener('keydown', exitByEscape, true);
		}
	}, []);

	return (
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
}

Modal.propTypes = {
	children: PropTypes.element,
	header: PropTypes.string, 
	onClose: PropTypes.func.isRequired,
}

export default Modal