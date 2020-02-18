import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

class Badge extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style, color, topText, botText } = this.props;
        const { container, text, badgeOuter, badgeInner } = defaultStyle;
        const combineStyles = StyleSheet.flatten([container, style]);
        const badgeInnerSt = StyleSheet.flatten([badgeInner, color]);


        return(
            <View style={ combineStyles }>
                <Text style={text}>{topText}</Text>
                <View style={badgeOuter}>
                    <View style={badgeInnerSt}>
                    </View>
                </View>
                <Text style={text}>{botText}</Text>

            </View>
        );
    }

}

const defaultStyle = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#808077',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    badgeOuter: {
        position: 'relative',
        height: 58,
        width: 58,
        borderRadius: 50,
        backgroundColor: '#EDF3E9',
        elevation: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    badgeInner: {
        position: 'absolute',
        height: 31,
        width: 31,
        borderRadius: 50,
        elevation: 6,

    }

});

export default Badge;