import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

class BotNavbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style } = this.props;
        const { navcontainer, btnContainer } = defaultStyle;
        const combineStyles = StyleSheet.flatten([navcontainer, style]);

        return(
            <View style={ combineStyles }>
                <View style={ btnContainer }>
                    {this.props.children}
                </View>
            </View>
        );
    }

}

const defaultStyle = StyleSheet.create({
    navcontainer: {
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-around'
    }
});

export default BotNavbar;