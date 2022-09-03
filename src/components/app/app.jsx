
import AppHeader from '../app-header/app-header';

import appStyles from './app.module.css';

function App() {
  return (
    <div className={ appStyles.app }>
		<div className={appStyles.conteiner}>
			<AppHeader/>
		</div>
		<div className={appStyles.conteiner}>
			<main  className={appStyles.content}>

			</main>
		</div>
		
    </div>
  );
}

export default App;
