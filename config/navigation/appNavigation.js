// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
import Products from '../../screens/products';
import ProductDetails from '../../screens/productDetails';
import styles from '../styling';
import Login from '../../screens/Login';
import Task from '../../screens/task';
import Profile from '../../screens/profile';
import MapScreen from '../../screens/mapscreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false
                }} name='Login' component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen options={{
                    title: 'Product Detail', headerStyle: {
                        backgroundColor: styles._dark,
                    },
                    headerTintColor: '#fff',
                }} name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name='Task' component={Task} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='MapScreen' component={MapScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;