import React, { Component } from 'react';
import {
    View, 
    Text,
    StyleSheet, 
    Image
} from 'react-native';

class Card extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { style, image, text, color } = this.props;
        const { cardStyle, descText, imageSt } = defaultStyle;
        const combineStyles = StyleSheet.flatten([cardStyle, style, color]);

        return(
            <View style={ combineStyles }>
                    <Text style={descText}>
                       {text}
                     </Text>
                     <Image 
                    source={image}
                    style={imageSt}
                    resizeMode="cover"
                    />
                </View>   
        );
    }

}

const defaultStyle = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#F5D1C3',
        width: 100,
        height: 71,
        borderRadius: 8,
        marginRight: 40,
        elevation: 3,
    },
    descText: {
        textAlign: 'center',
        color: '#808077',
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical: 20,
        paddingRight: 40,
        paddingLeft: 4,
    },
    imageSt: {
            width: 71, 
            height: 71,
            borderRadius: 50,
            position: 'absolute',
            right: -30,
        
    }
});

export default Card;

