import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = function (props) {
	return (
		<View>
			<Image source={require('../../assets/forest.jpg')} />
			<Text>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
