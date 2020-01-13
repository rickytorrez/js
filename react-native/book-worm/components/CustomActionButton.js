import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

function getPosition(position){
    switch(position){
        case 'left':
            return {
                position: 'absolute',
                left: 20,
                bottom: 20
            }
        default:
            return {
                position: 'absolute',
                right: 20,
                bottom: 20
            }
    };
};

const CustomActionButton = ({  onPress, style, position, children }) => {

    const floatingActionButton = position ? getPosition(position) : [];

    return (
        <TouchableOpacity style={ floatingActionButton } onPress={ onPress }>
            <View style={ [styles.button, style] }>
                { children }
            </View>
        </TouchableOpacity>
    )
}

CustomActionButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    style: PropTypes.object
};

CustomActionButton.defaultProps = {
    style: {}
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default CustomActionButton;