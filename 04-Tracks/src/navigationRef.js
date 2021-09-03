import { navigationOptions } from 'react-navigation';

let navigator;

export const setNavigator = nav => (navigator = nav);

export const navigate = (routeName, params) => {
	navigator.dispatch(
		navigationOptions.navigate({
			routeName,
			params,
		})
	);
};
