
import AppHeader from './../components/app-header/app-header';

export function OrdersPage() {
	/*
	const dispatch = useDispatch();
	
	useEffect( () => {
		dispatch(getIngredients());
	}, [dispatch]);
*/
	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				Orders
			</main>
		</div>
	)

}