import React from 'react-native';
import {
    Text, View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
                <Stack.Screen component={Home} name='Home' />
                <Stack.Screen component={Details} name='Details' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;