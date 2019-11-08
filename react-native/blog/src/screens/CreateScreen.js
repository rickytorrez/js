import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CreateScreen = () => {
    return(
        <View style={ styles.mainLayout }>
            <Text>Enter Title:</Text>
            <TextInput style={ styles.input }/>
            <Text>Enter Content:</Text>
            <TextInput style={ styles.input }/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainLayout: {
        marginTop: 10,
        marginHorizontal: 5
    },
    input: {
        marginVertical: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default CreateScreen;