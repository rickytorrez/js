import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {  }

const CartItem = (props) => {
    return (
        <View>
            <Text>
                <Text>QTY</Text> <Text>TTITLE</Text> 
            </Text>
            <View>
                <Text>$AMT</Text>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CartItem;