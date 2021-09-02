import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SignupScreen(props) {
	return (
		<View>
			<Text>Signup</Text>
			<Button
				title="Go to signin"
				onPress={() => props.navigation.navigate('Signin')}
			/>
			<Button
				title="Go to main flow"
				onPress={() => props.navigation.navigate('mainFlow')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
