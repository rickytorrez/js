import React from 'react';
import { 
    Scrollview, 
    View, 
    KeyboardAvoidingView, 
    Text, 
    TextInput,
    Button,
    StyleSheet 
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../components/UI/Input';

import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

const AuthScreen = (props) => {
    return (
        <KeyboardAvoidingView 
            style={ styles.screen }
            behavior='padding'
            keyboardVerticalOffset={ 50 }>
                {/* <LinearGradient 
                    colors={['#ffedff', '#ffe3ff']}
                    style={ styles.gradient }> */}
                    <Card style={ styles.authContainer }>
                        <Text 
                            style={ styles.label }>E-mail</Text>
                        <TextInput 
                            style={ styles.input }
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={() => {}}
                            // TODO value= (initialValue)
                        />
                        <Text
                            style={ styles.label }>Password</Text>
                        <TextInput 
                            style={ styles.input }
                            keyboardType='default'
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={() => {}}
                            // TODO value=
                        />
                        <Button 
                            title='Login'
                            color={Colors.primary}
                            onPress={() => {console.log('Login');
                            }}
                        />
                        <Button 
                            title='Switch to Sign Up'
                            color={Colors.accent}
                            onPress={() => {console.log('Reg');
                            }}
                        />
                    </Card>
                {/* </LinearGradient> */}
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = {
    headerTitle: 'Sign In'
};

const styles = StyleSheet.create({
    screen: {
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
    }
});

export default AuthScreen;