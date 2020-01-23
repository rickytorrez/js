import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {

    return (
        <View style={ styles.screen }>
            <TitleText>The Game is Over!</TitleText>
            <View style={ styles.imageContainer }>
                <Image 
                    fadeDuration={ 500 }
                    source={ require('../assets/images/success.png') }
                    // syntax for a web image:
                    // source={ {uri: 'https://heycolleen.files.wordpress.com/2013/07/cropped-img_1830.jpg'} }
                    style={ styles.image }
                    resizeMode='cover'
                    />
            </View>
            <View style={ styles.resultContainer }>
                <BodyText style={ styles.resultText }>
                    Your phone needed <Text style={ styles.highlight }>{ props.rounds }</Text> rounds to guess the number <Text style={ styles.highlight }>{ props.userNumber }</Text>
                </BodyText>
            </View>
            <Button 
                title='NEW GAME'
                onPress={ props.newGame }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    }
});

export default GameOverScreen;