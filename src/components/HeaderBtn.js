import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';
import { Button } from 'native-base';

class HeaderBtn extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style, title, active } = this.props;
        let currentStyle = null;


        if(active == true) {
            currentStyle = defaultStyle.activeBtn;
        } else {
            currentStyle = defaultStyle.inactiveBtn;
        }

        // const { activeButton } = defaultStyle;
        const combineStyles = StyleSheet.flatten([currentStyle, style]);


        
        return(
            
        <TouchableHighlight style={ combineStyles }>
            <Text style={{
                color: '#fff',
                fontSize: 16,
            }}>{ title }</Text>
        </TouchableHighlight>

        );

    }

}

{/* <Button
            title={title}
            buttonStyle={ combineStyles }
        >
                <Text style={{
                color: '#fff',
                fontSize: 16,
            }}>{ title }btn</Text>
        </Button> */}

const defaultStyle = StyleSheet.create({
    activeBtn: {
        backgroundColor: '#5F9595',
        borderColor: '#fff',
        borderWidth: 2,
        borderColor: '#F5D1C3',
        width: 135,
        height: 36,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 18,
    },
    inactiveBtn: {
        backgroundColor: '#5F9595',
        width: 135,
        height: 36,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 18,
        elevation: 6,
    },
});

export default HeaderBtn;