import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TrackListScreen(props) {
	return (
		<View>
			<Text></Text>
			<Button
				title="Go to track detail"
				onPress={() => props.navigation.navigate('TrackDetail')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
