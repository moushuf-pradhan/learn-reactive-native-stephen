import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = function() {
    const name = 'Moushuf';
    return (
        <View>
            <Text style={styles.headingStyle}>Getting started with React native!</Text>
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;