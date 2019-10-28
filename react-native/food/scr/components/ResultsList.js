import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';

import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {

    return (
        <View style={styles.container} >
            <Text style={ styles.titleStyle }>{ title }</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                data={ results } 
                renderItem={({ item }) => {
                    return <ResultsDetail result = { item }/>;
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;