import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// Import Provider
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
// Import components
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blogs',
		},
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
