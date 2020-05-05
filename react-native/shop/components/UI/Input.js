import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// action identifiers
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR'

// actions
const inputReducer = (state, action) => {
    switch(action.type){
        case INPUT_CHANGE:
            // console.log('================== INPUT_CHANGE =========================');
            // // console.log('copy of the previous state on INPUT_CHANGE => ', ...state);
            // console.log('state.value on inputReducer.INPUT_CHANGE => ', state.value)
            // console.log('state.isValid on inputReducer.INPUT_CHANGE => ', state.isValid)
            // console.log('_________________________________________________________');
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            };
        case INPUT_BLUR:
            // console.log('================== INPUT_BLUR ==========================');
            // console.log('copy of the previous state on INPUT_BLUR => ', ...state);
            // console.log('state.value on inputReducer.INPUT_BLUR => ', state.touched)
            // console.log('_________________________________________________________');
            return {
                ...state,
                touched: true
            };
        default:
            return state;
    };
};

const Input = (props) => {
    
    // form state
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false
    });

    // parent comp communication
    const { onInputChange, id } = props;
    
    useEffect(() => {
        if(inputState.touched){
            onInputChange(id, inputState.value, inputState.isValid);
        }
    },[inputState, onInputChange, id]);

    const textChangeHandler = (text) => {
        // validation set up
        // email reg expression
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
        isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
        isValid = false;
        }
        if (props.min != null && +text < props.min) {
        isValid = false;
        }
        if (props.max != null && +text > props.max) {
        isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
        isValid = false;
        }
        console.log('textChangeHandler isValid => ', isValid);
        console.log('textChangeHandler value => ', inputState.value);
        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid
        });
    };

    // checks on whether the user is done providing data
    const lostFocusHandler = () => {
        dispatch({
            type: INPUT_BLUR,
        });
    };

    return (
        <View style={ styles.formControl }>
            <Text style={ styles.label }>{ props.label }</Text>
            <TextInput 
                { ...props } 
                style={ styles.input } 
                value={ inputState.value }
                onChangeText={ textChangeHandler }
                // onBlur={ lostFocusHandler } 
            />
            { !inputState.isValid && (
                <Text>{ props.errorText }</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default Input;