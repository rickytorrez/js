import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {

    return (
        <View>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <Text>{ results.length }</Text>
            <FlatList
                horizontal
                keyExtractor={(result) => result.id}
                data={ results } 
                renderItem={({ item }) => {
                    return <Text>{ item.name }</Text>
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;