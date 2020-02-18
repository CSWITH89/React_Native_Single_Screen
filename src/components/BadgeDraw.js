import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

class BadgeDraw extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style } = this.props;
        const { badgeDraw } = defaultStyle;
        const combineStyles = StyleSheet.flatten([badgeDraw, style]);

        return(
            <View style={ combineStyles }>
                    {this.props.children}
            </View>
        );
    }

}

const defaultStyle = StyleSheet.create({
    badgeDraw: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        marginLeft: 37,
        marginRight: 37,
    },
});

export default BadgeDraw;