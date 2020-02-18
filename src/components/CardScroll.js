import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

class CardScroll extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style } = this.props;
        const { cardScroll } = defaultStyle;
        const combineStyles = StyleSheet.flatten([cardScroll, style]);

        return(
            <View style={ combineStyles }>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }

}

const defaultStyle = StyleSheet.create({
    cardScroll: {
        width: '100%',
        height: 76,
        marginLeft: 34,
    }
});

export default CardScroll;