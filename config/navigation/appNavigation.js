// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
import Products from '../../screens/products';
import ProductDetails from '../../screens/productDetails';
import styles from '../styling';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen options={{
                    title: 'Product Detail', headerStyle: {
                        backgroundColor: styles._dark,
                    },
                    headerTintColor: '#fff',
                }} name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;