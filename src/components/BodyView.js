import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

class BodyView extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={defaultStyle.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {this.props.children}
                </ScrollView>
            </View>
        )
    }
}

const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',

    },
});

export default BodyView;
