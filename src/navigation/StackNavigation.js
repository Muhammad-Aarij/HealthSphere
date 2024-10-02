import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, SplashScreen } from '../screens/index';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AuthenticatedNavigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name="Details" component={DetailsPage} options={{ headerShown: false, presentation: 'modal' }} />
        </AppStack.Navigator>
    );
};


const UnauthenticatedNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName='signUp'>
            <AuthStack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
            <AuthStack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
};

export default function StackNavigation() {
    return (
        <UnauthenticatedNavigator />
    )
}
