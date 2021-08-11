import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = function (props) {
	return (
		<View>
			<Image source={props.imageSource} />
			<Text>{props.title}</Text>
			<Text>Score - {props.imageScore}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
