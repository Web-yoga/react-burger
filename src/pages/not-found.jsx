
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './not-found.module.css';

export function NotFound404() {
	const history = useHistory();
	const toHomePage = useCallback(() => {
		console.log("!");
		history.replace({ pathname: '/'});
	}, [history]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<p className="text text_type_main-large mb-8">Такой страницы не существует!</p>
				<Button type="primary" size="medium" onClick={toHomePage} htmlType="button">
					{'На главную'}
				</Button>
			</div>
		</div>
	)
}