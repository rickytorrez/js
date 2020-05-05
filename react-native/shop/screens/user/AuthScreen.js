import React, { useReducer } from 'react';
import { 
    View, 
    KeyboardAvoidingView, 
    Text, 
    TextInput,
    Button,
    StyleSheet 
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux'
import * as authActions from '../../store/actions/auth';


import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

// identifier for formReducer update
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

// useReducer for form state and validity of inputs
// gets a current state and an action
const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};


const AuthScreen = (props) => {

    const dispatch = useDispatch();

    // form state
    const [formState, dispatchFormState] = useReducer(formReducer, { 
        // state:
        inputValues: {
            email: '',
            password: ''
        }, 
        // input validities:
        inputValidities: {
            email: false,
            password: false
        }, 
        // final check for form validity
        formIsValid: false, 
    });

    const signUpHandler = () => {
        dispatch(authActions.signup(
            formState.inputValues.email,
            formState.inputValues.password
        ));
    };

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if(text.trim().length > 0){
            isValid = true;
        }
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: text,
            isValid: isValid,
            input: inputIdentifier
        });
    };

    return (
        <KeyboardAvoidingView 
            style={ styles.screen }
            behavior='padding'
            keyboardVerticalOffset={ 50 }>
                <LinearGradient 
                    colors={['#ffedff', '#ffe3ff']}
                    style={ styles.gradient }>
                    <Card style={ styles.authContainer }>
                        <Text 
                            style={ styles.label }>E-mail</Text>
                        <TextInput 
                            style={ styles.input }
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={ textChangeHandler.bind(this, 'email') }
                            value={ formState.inputValues.email }
                        />
                        <Text
                            style={ styles.label }>Password</Text>
                        <TextInput 
                            style={ styles.input }
                            keyboardType='default'
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={ textChangeHandler.bind(this, 'password') }
                            value={ formState.inputValues.password }
                        />
                        <View style={ styles.buttonContainer }>
                            <Button 
                                title='Login'
                                color={Colors.primary}
                                onPress={signUpHandler}
                            />
                        </View>
                        <View style={ styles.buttonContainer }>
                            <Button 
                                title='Switch to Sign Up'
                                color={Colors.accent}
                                onPress={() => {console.log('Reg');
                                }}
                            />
                        </View>
                    </Card>
                </LinearGradient>
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default AuthScreen;