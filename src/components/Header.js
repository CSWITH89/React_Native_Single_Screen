import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style } = this.props;
        const { header, btnContainer } = defaultStyle;
        const combineStyles = StyleSheet.flatten([header, style]);

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
    header: {
        backgroundColor: '#5F9595',
        width: '100%',
        height: 132,
        borderRadius: 8,
        
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    btnContainer: {
        flexDirection: 'row',
        marginBottom: 28,
    }
});

export default Header;