import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class MainScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Main Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
