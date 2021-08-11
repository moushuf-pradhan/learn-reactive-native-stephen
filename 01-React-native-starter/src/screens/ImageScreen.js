import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Import components
import ImageDetail from '../components/ImageDetail';

const ImageScreen = function () {
	return (
		<View>
			<ImageDetail />
			<ImageDetail />
			<ImageDetail />
			<ImageDetail />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
