import React from 'react';
// Import from React navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Import Provider
import { Provider as AuthProvider } from './src/context/AuthContext';
// Import components
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailScreen,
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<AuthProvider>
			<App />
		</AuthProvider>
	);
};
