import React, { useEffect } from 'react';
import { 
    View, 
    ActivityIndicator, 
    AsyncStorage,
    Text, 
    StyleSheet 
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as authActions from '../store/actions/auth';

import Colors from '../constants/Colors';

const StartUpScreen = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if(!userData){
                props.navigation.navigate('Auth');
                return;
            };
            const transformedData = JSON.parse(userData);
            const { token, userId, expirationDate } = transformedData;
            const expireDate = new Date(expirationDate);

            if(expireDate <= new Date() || !token || !userId){
                props.navigation.navigate('Auth');
                return;
            };

            const expirationTime = expireDate.getTime() - new Date.getTime();

            props.navigation.navigate('Shop');
            dispatch(authActions.authenticate(userId, token));
        };
        tryLogin();
    }, [dispatch])

    return (
        <View style={ styles.screen }>
            <ActivityIndicator 
                size='large'
                color={ Colors.primary }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartUpScreen;