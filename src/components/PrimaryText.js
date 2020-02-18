import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

class PrimaryText extends Component {
    constructor(props){
        super(props);
    }

    render() {
        // const { style } = this.props;
        // const { header, btnContainer } = defaultStyle;
        // const combineStyles = StyleSheet.flatten([header, style]);

        return(
            <View style={ defaultStyle.title }>
                <Text style={ defaultStyle.text }>{ this.props.text }</Text>
            </View>
        );
    }

}

const defaultStyle = StyleSheet.create({
    title: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 34,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#808077',
    }
    
});

export default PrimaryText;