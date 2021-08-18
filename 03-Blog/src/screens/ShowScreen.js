import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
// Import icons
import { EvilIcons } from '@expo/vector-icons';

export default function ShowScreen(props) {
	const { state } = React.useContext(BlogContext);
	// Selected blog post
	const post = state.find(
		post => post.id === props.navigation.getParam('id')
	);
	return (
		<View>
			<Text>{post.title}</Text>
			<Text>{post.content}</Text>
		</View>
	);
}

ShowScreen.navigationOptions = props => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => props.navigation.navigate('Edit')}>
				<EvilIcons name="pencil" size={35} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({});
