import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

export default function IndexScreen() {
	const value = React.useContext(BlogContext);
	return (
		<View>
			<Text>{value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
