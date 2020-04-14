import React, { useEffect, useCallback, useReducer } from 'react';
import { 
    Platform, 
    View,  
    ScrollView, 
    Alert,
    StyleSheet
} from 'react-native';

// header button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Input from '../../components/UI/Input';

import * as productsActions from '../../store/actions/products';

import { useSelector, useDispatch } from 'react-redux';

// identifier for formReducer update
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

// useReducer for form state and validity of inputs
// gets a current state and an action
const formReducer = (state, action) => {
    // if this action occurs, store a value and validate it
    if(action.type === 'FORM_INPUT_UPDATE'){
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for(const key in updatedValidities){
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        console.log('formReducer state =>', state);
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const EditProductScreen = (props) => {

    // first before initializing state
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => 
        state.products.userProducts.find(prod => prod.id === prodId)
    );
    
    const disapatch = useDispatch();

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

    const submitHandler = useCallback(() => {
        // check for valid data
        if (!formState.formIsValid){
            console.log(formState);
            Alert.alert('Wrong input!', 'Please check the errors in the form.', [
                { text: 'Okay' }
            ]);
            return;
        }
        // editing
        if(editedProduct){  
            disapatch(productsActions.updateProduct(
                prodId,
                formState.inputValues.title,
                formState.inputValues.description,
                formState.inputValues.imageUrl
                )
            );
        // creating
        } else {
            disapatch(productsActions.createProduct(
                formState.inputValues.title,
                formState.inputValues.description,
                formState.inputValues.imageUrl,
                +formState.inputValues.price
                )
            );
        }
        props.navigation.goBack();
    }, [disapatch, prodId, formState]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler]);

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({ 
                type: FORM_INPUT_UPDATE, 
                value: inputValue, 
                isValid: inputValidity,
                input: inputIdentifier
            });
        }, 
        [dispatchFormState]
    );

    return (
        <ScrollView>
            <View style={ styles.form }>
                <Input 
                    id='title'
                    label='Title'
                    errorText='Please provide a valid title!'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect={ false }
                    returnKeyType='next'
                    onInputChange={ inputChangeHandler }
                    initialValue={ editedProduct ? editedProduct.title : '' }
                    intiallyValid={ !!editedProduct }
                    required

                />
                <Input 
                    id='imageUrl'
                    label='Image Url'
                    errorText='Please provide a valid image url!'
                    keyboardType='default'
                    returnKeyType='next'
                    onInputChange={ inputChangeHandler }
                    initialValue={ editedProduct ? editedProduct.imageUrl : '' }
                    intiallyValid={ !!editedProduct }
                    required
                />
                { editedProduct ? null : (
                    <Input 
                        id='price'
                        label='Price'
                        errorText='Please provide a valid price!'
                        keyboardType='decimal-pad'
                        returnKeyType='next'
                        onInputChange={ inputChangeHandler }
                        required
                        min={0.1}
                    />
                )}
                <Input 
                    id='description'
                    label='Description'
                    errorText='Please provide a valid description!'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    multiline
                    numberOfLines={ 3 }
                    onInputChange={ inputChangeHandler }
                    initialValue={ editedProduct ? editedProduct.description : '' }
                    intiallyValid={ !!editedProduct }
                    // required
                    // minLength={5}
                />
            </View>
        </ScrollView>
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
    }
});

export default EditProductScreen;