import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
            <Text>Track List Screen</Text>
            <Button 
                title="View Track"
                onPress={() => navigation.navigate('TrackDetail')}
            />
    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;