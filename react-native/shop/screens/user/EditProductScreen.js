import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { 
    Platform, 
    View,  
    ScrollView, 
    Alert,
    Text,
    TextInput,
    ActivityIndicator,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';

// header button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
// import Input from '../../components/UI/Input'; \\

import * as productsActions from '../../store/actions/products';

import { useSelector, useDispatch } from 'react-redux';
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

const EditProductScreen = (props) => {

    // state to manage loading and errors 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // first before initializing state
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => 
        state.products.userProducts.find(prod => prod.id === prodId)
    );
    
    const dispatch = useDispatch();

    // form state
    const [formState, dispatchFormState] = useReducer(formReducer, { 
        // state:
        inputValues: {
            title: editedProduct ? editedProduct.title : '',
            imageUrl: editedProduct ? editedProduct.imageUrl : '',
            description: editedProduct ? editedProduct.description : '',
            price: ''
        }, 
        // input validities:
        inputValidities: {
            title: editedProduct ? true : false,
            imageUrl: editedProduct ? true : false,
            description: editedProduct ? true : false,
            price: editedProduct ? true : false,
        }, 
        // final check for form validity
        formIsValid: editedProduct ? true : false, 
    });

    useEffect(() => {
        if(error){
            Alert.alert('An error ocurred!', error, [
                { text: 'Sad' }
            ]);
        };
    }, [error]);

    const submitHandler = useCallback( async() => {
        // check for valid data
        if (!formState.formIsValid){
            console.log(formState);
            Alert.alert('Wrong input!', 'Please check the errors in the form.', [
                { text: 'Okay' }
            ]);
            return;
        }
        setError(null)
        setIsLoading(true);
        try {
            // editing
            if(editedProduct){  
                await dispatch(productsActions.updateProduct(
                    prodId,
                    formState.inputValues.title,
                    formState.inputValues.description,
                    formState.inputValues.imageUrl
                    )
                );
            // creating
            } else {
                await dispatch(productsActions.createProduct(
                    formState.inputValues.title,
                    formState.inputValues.description,
                    formState.inputValues.imageUrl,
                    +formState.inputValues.price
                    )
                );
            }
            props.navigation.goBack();
        } catch (err){
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, prodId, formState]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler]);

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().length > 0) {
            isValid = true;
        }
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: text,
            isValid: isValid,
            input: inputIdentifier
        });
    };

    if(isLoading){
        return(
            <View style={ styles.centered }>
                <ActivityIndicator 
                    size='large'
                    colors={ Colors.primary }
                />
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='padding'
            keyboardVerticalOffset={ 100 }
        >
            <ScrollView>
                <View style={ styles.form }>
                    <View style={ styles.formControl }>
                        <Text style={ styles.label }>Title</Text>
                        <TextInput
                            style={ styles.input }
                            value={ formState.inputValues.title }
                            onChangeText={ textChangeHandler.bind(this, 'title') }
                            keyboardType="default"
                            autoCapitalize="sentences"
                            autoCorrect
                            returnKeyType="next"
                            onEndEditing={ () => console.log('onEndEditing') }
                            onSubmitEditing={ () => console.log('onSubmitEditing') }
                        />
                        { !formState.inputValidities.title && (
                            <Text>Please enter a valid Title</Text> 
                            )
                        }
                    </View>
                    <View style={ styles.formControl }>
                        <Text style={ styles.label }>Image URL</Text>
                        <TextInput
                            style={ styles.input }
                            value={ formState.inputValues.imageUrl }
                            onChangeText={ textChangeHandler.bind(this, 'imageUrl') }
                        />
                        { !formState.inputValidities.imageUrl && (
                            <Text>Please enter a valid Image Url</Text> 
                            )
                        }
                    </View>
                    { editedProduct ? null : (
                        <View style={ styles.formControl }>
                            <Text style={ styles.label }>Price</Text>
                            <TextInput
                                style={ styles.input }
                                value={ formState.inputValues.price }
                                onChangeText={ textChangeHandler.bind(this, 'price') }
                                keyboardType="decimal-pad"
                            />
                        </View>
                    )}
                        { !formState.inputValidities.price && (
                            <Text>Please enter a valid price!</Text> 
                            )
                        }
                    <View style={ styles.formControl }>
                        <Text style={ styles.label }>Description</Text>
                        <TextInput
                            style={ styles.input } 
                            value={ formState.inputValues.description }
                            onChangeText={ textChangeHandler.bind(this, 'description') }
                        />
                    </View>
                    { !formState.inputValidities.description && (
                            <Text>Please enter a valid description!</Text> 
                        )
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

EditProductScreen.navigationOptions = (navData) => {
    const submitFn = navData.navigation.getParam('submit');
    return {
        headerTitle: navData.navigation.getParam('productId') 
            ? 'Edit Product' 
            : 'Add Product',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ HeaderButton }>
                <Item 
                    title='Save'
                    iconName={ Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark' }
                    size={ 23 }
                    onPress={ submitFn }
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
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
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditProductScreen;