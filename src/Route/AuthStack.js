import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../Screen/Login/login';
import RegisterScreen from '../Screen/Register/register';

const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen}/>
            <AuthStack.Screen name="Register" component={RegisterScreen}/>
        </AuthStack.Navigator>
    )
}
