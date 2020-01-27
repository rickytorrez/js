import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native';

import { CATEGORIES } from '../data/dummydata';
import Colors from '../constants/Colors';

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity 
                onPress={ () => {
                    props.navigation.navigate(
                        { 
                            routeName: 'CategoryMeals',
                            params: { 
                                categoryId: itemData.item.id,
                            }
                        }
                    )
                } }
                style={ styles.gridItemStyle }>
                <View >
                    <Text>{ itemData.item.title }</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return ( 
        <FlatList 
            keyExtractor={ (item, index) => item.id }
            data={ CATEGORIES }
            renderItem={ renderGridItem }
            numColumns={ 2 } />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;