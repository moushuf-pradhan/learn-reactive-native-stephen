import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Import components
import ImageDetail from '../components/ImageDetail';

const ImageScreen = function () {
	return (
		<View>
			<ImageDetail
				title="Forest"
				imageSource={require('../../assets/forest.jpg')}
			/>
			<ImageDetail
				title="Beach"
				imageSource={require('../../assets/beach.jpg')}
			/>
			<ImageDetail
				title="Mountain"
				imageSource={require('../../assets/mountain.jpg')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
